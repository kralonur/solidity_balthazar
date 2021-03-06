// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IERC20NoTransfer.sol";
import "./RewardToken.sol";
import "./ERC20NoTransfer.sol";

contract Staking is ERC20NoTransfer, Ownable {
    using SafeERC20 for IERC20;
    using EnumerableSet for EnumerableSet.UintSet;
    /// Main token
    IERC20 public tokenMain;
    /// Reward token
    RewardToken public tokenReward;

    /// Total staked to the contract
    uint256 public totalStaked;
    /// Total staked with weight
    uint256 public totalStakedWithWeight;
    /// Total reward produced
    uint256 public rewardProduced;
    /// Reward to share between stakeholders
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

    /// Latest stake id
    uint256 public stakeId;

    /**
     * @dev This struct holds information about the stake
     * @param amount Amount staked
     * @param stakeTime Timestamp that staked
     * @param unstakeTime Timestamp to unstake
     */
    struct StakeInfo {
        uint256 amount;
        uint128 stakeTime;
        uint128 unstakeTime;
    }

    /**
     * @dev This struct holds information about the stakeholder
     * @param stakedWithWeight Stake amount with weight
     * @param availableReward Available reward for the stakeholder
     * @param rewardMissed Missed reward for the stake holder
     */
    struct StakeHolder {
        uint256 stakedWithWeight;
        uint256 availableReward;
        uint256 rewardMissed;
    }

    /// A mapping for storing stakeholders
    mapping(address => StakeHolder) private _stakeHolders;
    /// A mapping for storing stakes with stakeholder and stake id
    mapping(address => mapping(uint256 => StakeInfo)) private _stakes;
    /// A mapping for storing current valid stakes on contract
    mapping(address => EnumerableSet.UintSet) private _validStakes;

    constructor(
        address addressTokenMain,
        address addressTokenReward,
        uint256 _reward,
        uint256 _tokenClaimPeriod,
        uint256 _duration
    ) ERC20NoTransfer("SBGG", "SBGG") {
        tokenMain = IERC20(addressTokenMain);
        tokenReward = RewardToken(addressTokenReward);
        reward = _reward;
        tokenClaimPeriod = _tokenClaimPeriod;
        duration = _duration;
        lastUpdateTime = block.timestamp;
    }

    /**
     * @dev Emitted when stake holder staked tokens
     * @param stakeId The address of the stakeholder
     */
    event Stake(uint256 indexed stakeId);
    /**
     * @dev Emitted when stake holder unstaked tokens
     * @param stakeId The address of the stakeholder
     */
    event Unstake(uint256 indexed stakeId);
    /**
     * @dev Emitted when stake holder claimed reward tokens
     * @param stakeHolder The address of the stakeholder
     * @param amount The amount of reward tokens claimed
     */
    event Claim(address indexed stakeHolder, uint256 amount);

    /**
     * @dev Stakes the amount for the behalf of the stakeholder
     * @param amount The amount to stake
     * @param lockDuration The duration of funds to lock
     */
    function stake(uint256 amount, uint256 lockDuration) external {
        tokenMain.safeTransferFrom(msg.sender, address(this), amount);
        updateValues();
        require(
            lockDuration >= MIN_LOCK_DURATION &&
                lockDuration <= MAX_LOCK_DURATION,
            "Lock duration incorrect"
        );
        uint256 weight = _getWeight(amount, lockDuration);
        _stakes[msg.sender][stakeId] = StakeInfo({
            amount: amount,
            stakeTime: uint128(block.timestamp),
            unstakeTime: uint128(block.timestamp + lockDuration)
        });
        _validStakes[msg.sender].add(stakeId++);
        totalStaked += amount;
        totalStakedWithWeight += weight;
        _stakeHolders[msg.sender].rewardMissed += _calculateMissedRewards(
            weight
        );
        _stakeHolders[msg.sender].stakedWithWeight += weight;

        _mint(msg.sender, weight);

        emit Stake(stakeId - 1);
    }

    /**
     * @dev Unstakes the amount for the behalf of the stakeholder
     * @param _stakeId The id of stake to unstake
     */
    function unstake(uint256 _stakeId) external {
        require(
            _validStakes[msg.sender].contains(_stakeId),
            "Stake is unvalid"
        );
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        StakeInfo storage stakeInfo = _stakes[msg.sender][_stakeId];
        updateValues();
        uint256 weight = _getWeight(
            stakeInfo.amount,
            stakeInfo.unstakeTime - stakeInfo.stakeTime
        );
        stakeHolder.availableReward +=
            tps *
            stakeHolder.stakedWithWeight -
            stakeHolder.rewardMissed;
        stakeHolder.stakedWithWeight -= weight;
        stakeHolder.rewardMissed = _calculateMissedRewards(
            stakeHolder.stakedWithWeight
        );
        _validStakes[msg.sender].remove(_stakeId);
        totalStaked -= stakeInfo.amount;
        tokenMain.safeTransfer(msg.sender, stakeInfo.amount);

        _burn(msg.sender, weight);

        //claim rewards
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.mint(msg.sender, awardToClaim);

        rewardProduced += awardToClaim;

        emit Unstake(_stakeId);
    }

    /**
     * @dev Claims the rewards for the behalf of the stakeholder
     */
    function claimRewards() external {
        updateValues();
        StakeHolder storage stakeHolder = _stakeHolders[msg.sender];
        uint256 awardToClaim = calculateAvailableRewards(msg.sender);

        tokenReward.mint(msg.sender, awardToClaim);

        stakeHolder.rewardMissed += awardToClaim * PRECISION;

        rewardProduced += awardToClaim;

        emit Claim(msg.sender, awardToClaim);
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

    /**
     * @dev Returns the stake information
     * @param stakeHolder The address of the stakeholder
     * @param _stakeId The id of the stake
     * @return stake information
     */
    function getStakeInfo(address stakeHolder, uint256 _stakeId)
        external
        view
        returns (StakeInfo memory)
    {
        return _stakes[stakeHolder][_stakeId];
    }

    /**
     * @dev Returns the total stake amount by the stakeholder
     * @param stakeHolder The address of the stakeholder
     * @return total stake amount by the stakeholder
     */
    function calculateTotalStakedByStakeholder(address stakeHolder)
        external
        view
        returns (uint256)
    {
        uint256[] memory validStakes = _getValidStakes(stakeHolder);
        uint256 totalStakeByStakeholder;
        for (uint256 i = 0; i < validStakes.length; i++) {
            totalStakeByStakeholder += _stakes[stakeHolder][validStakes[i]]
                .amount;
        }

        return totalStakeByStakeholder;
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
     * @return calculated tps
     */
    function calculateTps(uint256 passedTime) public view returns (uint256) {
        if (totalStakedWithWeight == 0) return 0;

        return
            tps +
            ((reward * PRECISION * tokenClaimPeriod) /
                (totalStakedWithWeight * duration)) *
            passedTime;
    }

    /**
     * @dev Calculates the available rewards for the stake holder
     * @param stakeHolderAddress The address of the stake holder
     * @return available rewards
     */
    function calculateAvailableRewards(address stakeHolderAddress)
        public
        view
        returns (uint256)
    {
        StakeHolder storage stakeHolder = _stakeHolders[stakeHolderAddress];

        return
            (tps *
                stakeHolder.stakedWithWeight +
                stakeHolder.availableReward -
                stakeHolder.rewardMissed) / PRECISION;
    }

    /**
     * @dev Calculates the weight
     * @param amount The amount of tokens
     * @param lockDuration The duration of funds to lock
     * @return calculated weight
     */
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

    /**
     * @dev Calculates the missed rewards for the stake holder
     * @param amount The amount of tokens
     * @return missed rewards
     */
    function _calculateMissedRewards(uint256 amount)
        private
        view
        returns (uint256)
    {
        return amount * tps;
    }

    /**
     * @dev Returns array of valid stakes
     * @param stakeHolder The address of the stakeholder
     * @return array of valid stakes
     */
    function _getValidStakes(address stakeHolder)
        private
        view
        returns (uint256[] memory)
    {
        EnumerableSet.UintSet storage stakes = _validStakes[stakeHolder];
        uint256[] memory set = new uint256[](stakes.length());
        for (uint256 i = 0; i < stakes.length(); i++) {
            set[i] = stakes.at(i);
        }
        return set;
    }
}
