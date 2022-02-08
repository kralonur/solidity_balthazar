// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IERC20NoTransfer.sol";
import "hardhat/console.sol";

contract Staking is Ownable {
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.UintSet;
    using Math for uint256;
    /// Main token
    IERC20 public tokenMain;
    /// Stake token
    IERC20NoTransfer public tokenStake;
    /// Reward token
    IERC20NoTransfer public tokenReward;

    /// Total staked to the contract
    uint256 public totalStaked;
    /// Total reward produced
    uint256 public rewardProduced;
    /// Reward to share between stake holders
    uint256 public reward; // default value
    /// Last update time
    uint256 public lastUpdateTime;
    /// Period for claiming {reward}, ex: 1 hour (hourly)
    uint256 public tokenClaimPeriod;
    /// Duration of given {reward}, ex: 200 token for 2 days
    uint256 public duration;
    /// Token per stake
    uint256 public tps;

    uint256 public constant PRECISION = 1e18;
    uint256 public constant MIN_LOCK_DURATION = 10 minutes;
    uint256 public constant MAX_LOCK_DURATION = 52 weeks;

    uint256 public stakeId;

    enum StakeStatus {
        INVALID,
        ON_STAKE,
        UNSTAKED
    }

    struct StakeInfo {
        uint256 amount;
        uint256 stakeTime;
        uint256 unstakeTime;
        StakeStatus status;
    }

    /**
     * @dev This struct holds information about the stake holder
     * @param staked Staked amount by stake holder
     * @param availableReward Available reward for the stake holder
     * @param rewardMissed Missed reward for the stake holder
     */
    struct StakeHolder {
        uint256 staked;
        uint256 availableReward;
        uint256 rewardMissed;
    }

    /// A mapping for storing stake holders
    mapping(address => StakeHolder) private _stakeHolders;

    mapping(address => mapping(uint256 => StakeInfo)) private _stakes;
    mapping(address => EnumerableSet.UintSet) private _validStakes;

    constructor(
        address addressTokenMain,
        address addressTokenStake,
        address addressTokenReward,
        uint256 _reward,
        uint256 _tokenClaimPeriod,
        uint256 _duration
    ) {
        tokenMain = IERC20(addressTokenMain);
        tokenStake = IERC20NoTransfer(addressTokenStake);
        tokenReward = IERC20NoTransfer(addressTokenReward);
        reward = _reward;
        tokenClaimPeriod = _tokenClaimPeriod;
        duration = _duration;
        lastUpdateTime = block.timestamp;
    }

    function stake(uint256 amount, uint256 _lockDuration) external {
        tokenMain.safeTransferFrom(msg.sender, address(this), amount);
        updateValues();
        uint256 lockDuration = _lockDuration.min(MAX_LOCK_DURATION); // in case _duration longer than MAX_LOCK
        lockDuration = lockDuration.max(MIN_LOCK_DURATION); // in case _duration shorter than MIN_LOCK_DURATION
        _stakes[msg.sender][stakeId] = StakeInfo({
            amount: amount,
            stakeTime: block.timestamp,
            unstakeTime: block.timestamp + lockDuration,
            status: StakeStatus.ON_STAKE
        });
        _validStakes[msg.sender].add(stakeId++);
        totalStaked += amount;
        _stakeHolders[msg.sender].rewardMissed += _calculateMissedRewards(
            amount
        );
        _stakeHolders[msg.sender].staked += amount;

        tokenStake.mint(msg.sender, _getWeight(amount, lockDuration));
    }

    function unstake(uint256 _stakeId) external {
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        StakeInfo storage stakeInfo = _stakes[msg.sender][_stakeId];
        updateValues();
        stakeHolder.availableReward +=
            tps *
            stakeHolder.staked -
            stakeHolder.rewardMissed;
        stakeInfo.status = StakeStatus.UNSTAKED;
        stakeHolder.staked -= stakeInfo.amount;
        stakeHolder.rewardMissed = _calculateMissedRewards(stakeHolder.staked);
        _validStakes[msg.sender].remove(_stakeId);
        totalStaked -= stakeInfo.amount;
        tokenMain.safeTransfer(msg.sender, stakeInfo.amount);
    }

    function claimRewards() external {
        updateValues();
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.mint(msg.sender, awardToClaim);

        stakeHolder.rewardMissed += awardToClaim * PRECISION;

        rewardProduced += awardToClaim;
    }

    /**
     * @dev Sets the parameters for contract
     * @param _reward See {reward}
     * @param _tokenClaimPeriod See {tokenClaimPeriod}
     * @param _duration See {duration}
     */
    function setParameters(
        uint256 _reward,
        uint256 _tokenClaimPeriod,
        uint256 _duration
    ) external onlyOwner {
        reward = _reward;
        tokenClaimPeriod = _tokenClaimPeriod;
        duration = _duration;
    }

    /// See {StakeHolder}
    function getStakeHolder(address stakeHolderAddress)
        external
        view
        returns (StakeHolder memory)
    {
        StakeHolder memory stakeHolder = _stakeHolders[stakeHolderAddress];
        stakeHolder.availableReward = calculateAvailableRewards(
            stakeHolderAddress
        );
        return (stakeHolder);
    }

    function getStakeInfo(address stakeHolder, uint256 _stakeId)
        external
        view
        returns (StakeInfo memory)
    {
        return _stakes[stakeHolder][_stakeId];
    }

    /**
     * @dev Updates necessary values to calculate stake
     */
    function updateValues() public {
        uint256 passedTime = (block.timestamp - lastUpdateTime) /
            tokenClaimPeriod;
        lastUpdateTime += passedTime * tokenClaimPeriod;
        tps = calculateTps(passedTime);
    }

    /**
     * @dev Calculates the tps, see{tps}
     * @param passedTime The passed time to calculate tps
     */
    function calculateTps(uint256 passedTime) public view returns (uint256) {
        if (totalStaked == 0) return 0;

        return
            tps +
            ((reward * PRECISION * tokenClaimPeriod) /
                (totalStaked * duration)) *
            passedTime;
    }

    /**
     * @dev Calculates the available rewards for the stake holder
     * @param stakeHolderAddress The address of the stake holder
     */
    function calculateAvailableRewards(address stakeHolderAddress)
        public
        view
        returns (uint256)
    {
        StakeHolder storage stakeHolder = _stakeHolders[stakeHolderAddress];

        console.log(
            "Tps: %s, Staked: %s, Reward missed: %s",
            tps,
            stakeHolder.staked,
            stakeHolder.rewardMissed
        );

        return
            (tps *
                stakeHolder.staked +
                stakeHolder.availableReward -
                stakeHolder.rewardMissed) / PRECISION;
    }

    /**
     * @dev Calculates the missed rewards for the stake holder
     * @param amount The amount of tokens
     */
    function _calculateMissedRewards(uint256 amount)
        private
        view
        returns (uint256)
    {
        return amount * tps;
    }

    function _getWeight(uint256 amount, uint256 lockDuration)
        private
        pure
        returns (uint256)
    {
        return
            (amount *
                (PRECISION +
                    ((PRECISION * lockDuration) / MAX_LOCK_DURATION))) /
            PRECISION;
    }
}
