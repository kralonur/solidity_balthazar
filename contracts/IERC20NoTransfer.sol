// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

interface IERC20NoTransfer {
    function mint(address to, uint256 amount) external;

    function burn(uint256 amount) external;

    function burnFrom(address account, uint256 amount) external;
}
