// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "hardhat/console.sol";

contract RewardToken is ERC20, AccessControl {
    using SafeERC20 for IERC20;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    IERC20 public tokenMain;

    struct Claim {
        uint256 claimUnlockTime;
        uint256 claimAmount;
    }

    mapping(address => Claim[]) private _claims;

    constructor(
        string memory name,
        string memory symbol,
        address addressTokenMain
    ) ERC20(name, symbol) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(BURNER_ROLE, msg.sender);
        tokenMain = IERC20(addressTokenMain);
    }

    function mint(address to, uint256 amount) public onlyRole(BURNER_ROLE) {
        _mint(to, amount);
        _claims[to].push(
            Claim({
                claimUnlockTime: block.timestamp + 52 weeks,
                claimAmount: amount
            })
        );
    }

    function burn(uint256 amount) public onlyRole(BURNER_ROLE) {
        _burn(_msgSender(), amount);
    }

    function burnFrom(address account, uint256 amount)
        public
        onlyRole(BURNER_ROLE)
    {
        uint256 currentAllowance = allowance(account, _msgSender());
        require(
            currentAllowance >= amount,
            "ERC20: burn amount exceeds allowance"
        );
        unchecked {
            _approve(account, _msgSender(), currentAllowance - amount);
        }
        _burn(account, amount);
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal pure override {
        revert("NON_TRANSFERABLE");
    }

    function swap() external {
        uint256 amountToSwap;
        for (uint256 i = 0; i < _claims[msg.sender].length; i++) {
            Claim storage currentClaim = _claims[msg.sender][i];
            if (block.timestamp > currentClaim.claimUnlockTime) {
                amountToSwap += currentClaim.claimAmount;
                currentClaim.claimAmount = 0;
            }
        }
        if (amountToSwap > 0) {
            tokenMain.safeTransfer(msg.sender, amountToSwap);
            _burn(msg.sender, amountToSwap);
        }
    }
}
