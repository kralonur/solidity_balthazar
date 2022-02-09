/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Token, ERC20TokenInterface } from "../ERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002cf438038062002cf483398181016040528101906200003791906200046e565b818181600390805190602001906200005192919062000221565b5080600490805190602001906200006a92919062000221565b505050620000826000801b33620000bc60201b60201c565b620000b47f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633620000bc60201b60201c565b505062000558565b620000ce8282620001ae60201b60201c565b620001aa5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200014f6200021960201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b8280546200022f9062000522565b90600052602060002090601f0160209004810192826200025357600085556200029f565b82601f106200026e57805160ff19168380011785556200029f565b828001600101855582156200029f579182015b828111156200029e57825182559160200191906001019062000281565b5b509050620002ae9190620002b2565b5090565b5b80821115620002cd576000816000905550600101620002b3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200033a82620002ef565b810181811067ffffffffffffffff821117156200035c576200035b62000300565b5b80604052505050565b600062000371620002d1565b90506200037f82826200032f565b919050565b600067ffffffffffffffff821115620003a257620003a162000300565b5b620003ad82620002ef565b9050602081019050919050565b60005b83811015620003da578082015181840152602081019050620003bd565b83811115620003ea576000848401525b50505050565b600062000407620004018462000384565b62000365565b905082815260208101848484011115620004265762000425620002ea565b5b62000433848285620003ba565b509392505050565b600082601f830112620004535762000452620002e5565b5b815162000465848260208601620003f0565b91505092915050565b60008060408385031215620004885762000487620002db565b5b600083015167ffffffffffffffff811115620004a957620004a8620002e0565b5b620004b7858286016200043b565b925050602083015167ffffffffffffffff811115620004db57620004da620002e0565b5b620004e9858286016200043b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200053b57607f821691505b60208210811415620005525762000551620004f3565b5b50919050565b61278c80620005686000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806342966c68116100b8578063a217fddf1161007c578063a217fddf1461039b578063a457c2d7146103b9578063a9059cbb146103e9578063d539139314610419578063d547741f14610437578063dd62ed3e1461045357610142565b806342966c68146102e557806370a082311461030157806379cc67901461033157806391d148541461034d57806395d89b411461037d57610142565b8063248a9ca31161010a578063248a9ca3146102135780632f2ff15d14610243578063313ce5671461025f57806336568abe1461027d578063395093511461029957806340c10f19146102c957610142565b806301ffc9a71461014757806306fdde0314610177578063095ea7b31461019557806318160ddd146101c557806323b872dd146101e3575b600080fd5b610161600480360381019061015c9190611921565b610483565b60405161016e9190611969565b60405180910390f35b61017f6104fd565b60405161018c9190611a1d565b60405180910390f35b6101af60048036038101906101aa9190611ad3565b61058f565b6040516101bc9190611969565b60405180910390f35b6101cd6105ad565b6040516101da9190611b22565b60405180910390f35b6101fd60048036038101906101f89190611b3d565b6105b7565b60405161020a9190611969565b60405180910390f35b61022d60048036038101906102289190611bc6565b6106af565b60405161023a9190611c02565b60405180910390f35b61025d60048036038101906102589190611c1d565b6106cf565b005b6102676106f8565b6040516102749190611c79565b60405180910390f35b61029760048036038101906102929190611c1d565b610701565b005b6102b360048036038101906102ae9190611ad3565b610784565b6040516102c09190611969565b60405180910390f35b6102e360048036038101906102de9190611ad3565b610830565b005b6102ff60048036038101906102fa9190611c94565b610871565b005b61031b60048036038101906103169190611cc1565b610885565b6040516103289190611b22565b60405180910390f35b61034b60048036038101906103469190611ad3565b6108cd565b005b61036760048036038101906103629190611c1d565b610948565b6040516103749190611969565b60405180910390f35b6103856109b3565b6040516103929190611a1d565b60405180910390f35b6103a3610a45565b6040516103b09190611c02565b60405180910390f35b6103d360048036038101906103ce9190611ad3565b610a4c565b6040516103e09190611969565b60405180910390f35b61040360048036038101906103fe9190611ad3565b610b37565b6040516104109190611969565b60405180910390f35b610421610b55565b60405161042e9190611c02565b60405180910390f35b610451600480360381019061044c9190611c1d565b610b79565b005b61046d60048036038101906104689190611cee565b610ba2565b60405161047a9190611b22565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104f657506104f582610c29565b5b9050919050565b60606003805461050c90611d5d565b80601f016020809104026020016040519081016040528092919081815260200182805461053890611d5d565b80156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b5050505050905090565b60006105a361059c610c93565b8484610c9b565b6001905092915050565b6000600254905090565b60006105c4848484610e66565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061060f610c93565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068690611e01565b60405180910390fd5b6106a38561069b610c93565b858403610c9b565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b6106d8826106af565b6106e9816106e4610c93565b6110e7565b6106f38383611184565b505050565b60006012905090565b610709610c93565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076d90611e93565b60405180910390fd5b6107808282611265565b5050565b6000610826610791610c93565b84846001600061079f610c93565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546108219190611ee2565b610c9b565b6001905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a66108628161085d610c93565b6110e7565b61086c8383611347565b505050565b61088261087c610c93565b826114a7565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006108e0836108db610c93565b610ba2565b905081811015610925576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091c90611faa565b60405180910390fd5b61093983610931610c93565b848403610c9b565b61094383836114a7565b505050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6060600480546109c290611d5d565b80601f01602080910402602001604051908101604052809291908181526020018280546109ee90611d5d565b8015610a3b5780601f10610a1057610100808354040283529160200191610a3b565b820191906000526020600020905b815481529060010190602001808311610a1e57829003601f168201915b5050505050905090565b6000801b81565b60008060016000610a5b610c93565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610b18576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0f9061203c565b60405180910390fd5b610b2c610b23610c93565b85858403610c9b565b600191505092915050565b6000610b4b610b44610c93565b8484610e66565b6001905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b610b82826106af565b610b9381610b8e610c93565b6110e7565b610b9d8383611265565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d0b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d02906120ce565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7290612160565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610e599190611b22565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ed6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ecd906121f2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3d90612284565b60405180910390fd5b610f5183838361167e565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610fd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fce90612316565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461106a9190611ee2565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110ce9190611b22565b60405180910390a36110e1848484611683565b50505050565b6110f18282610948565b611180576111168173ffffffffffffffffffffffffffffffffffffffff166014611688565b6111248360001c6020611688565b60405160200161113592919061240a565b6040516020818303038152906040526040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111779190611a1d565b60405180910390fd5b5050565b61118e8282610948565b6112615760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611206610c93565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61126f8282610948565b156113435760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506112e8610c93565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113ae90612490565b60405180910390fd5b6113c36000838361167e565b80600260008282546113d59190611ee2565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461142a9190611ee2565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161148f9190611b22565b60405180910390a36114a360008383611683565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150e90612522565b60405180910390fd5b6115238260008361167e565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156115a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115a0906125b4565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816002600082825461160091906125d4565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116659190611b22565b60405180910390a361167983600084611683565b505050565b505050565b505050565b60606000600283600261169b9190612608565b6116a59190611ee2565b67ffffffffffffffff8111156116be576116bd612662565b5b6040519080825280601f01601f1916602001820160405280156116f05781602001600182028036833780820191505090505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061172857611727612691565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061178c5761178b612691565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600060018460026117cc9190612608565b6117d69190611ee2565b90505b6001811115611876577f3031323334353637383961626364656600000000000000000000000000000000600f86166010811061181857611817612691565b5b1a60f81b82828151811061182f5761182e612691565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c94508061186f906126c0565b90506117d9565b50600084146118ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118b190612736565b60405180910390fd5b8091505092915050565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6118fe816118c9565b811461190957600080fd5b50565b60008135905061191b816118f5565b92915050565b600060208284031215611937576119366118c4565b5b60006119458482850161190c565b91505092915050565b60008115159050919050565b6119638161194e565b82525050565b600060208201905061197e600083018461195a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119be5780820151818401526020810190506119a3565b838111156119cd576000848401525b50505050565b6000601f19601f8301169050919050565b60006119ef82611984565b6119f9818561198f565b9350611a098185602086016119a0565b611a12816119d3565b840191505092915050565b60006020820190508181036000830152611a3781846119e4565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611a6a82611a3f565b9050919050565b611a7a81611a5f565b8114611a8557600080fd5b50565b600081359050611a9781611a71565b92915050565b6000819050919050565b611ab081611a9d565b8114611abb57600080fd5b50565b600081359050611acd81611aa7565b92915050565b60008060408385031215611aea57611ae96118c4565b5b6000611af885828601611a88565b9250506020611b0985828601611abe565b9150509250929050565b611b1c81611a9d565b82525050565b6000602082019050611b376000830184611b13565b92915050565b600080600060608486031215611b5657611b556118c4565b5b6000611b6486828701611a88565b9350506020611b7586828701611a88565b9250506040611b8686828701611abe565b9150509250925092565b6000819050919050565b611ba381611b90565b8114611bae57600080fd5b50565b600081359050611bc081611b9a565b92915050565b600060208284031215611bdc57611bdb6118c4565b5b6000611bea84828501611bb1565b91505092915050565b611bfc81611b90565b82525050565b6000602082019050611c176000830184611bf3565b92915050565b60008060408385031215611c3457611c336118c4565b5b6000611c4285828601611bb1565b9250506020611c5385828601611a88565b9150509250929050565b600060ff82169050919050565b611c7381611c5d565b82525050565b6000602082019050611c8e6000830184611c6a565b92915050565b600060208284031215611caa57611ca96118c4565b5b6000611cb884828501611abe565b91505092915050565b600060208284031215611cd757611cd66118c4565b5b6000611ce584828501611a88565b91505092915050565b60008060408385031215611d0557611d046118c4565b5b6000611d1385828601611a88565b9250506020611d2485828601611a88565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611d7557607f821691505b60208210811415611d8957611d88611d2e565b5b50919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b6000611deb60288361198f565b9150611df682611d8f565b604082019050919050565b60006020820190508181036000830152611e1a81611dde565b9050919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b6000611e7d602f8361198f565b9150611e8882611e21565b604082019050919050565b60006020820190508181036000830152611eac81611e70565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611eed82611a9d565b9150611ef883611a9d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2d57611f2c611eb3565b5b828201905092915050565b7f45524332303a206275726e20616d6f756e74206578636565647320616c6c6f7760008201527f616e636500000000000000000000000000000000000000000000000000000000602082015250565b6000611f9460248361198f565b9150611f9f82611f38565b604082019050919050565b60006020820190508181036000830152611fc381611f87565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061202660258361198f565b915061203182611fca565b604082019050919050565b6000602082019050818103600083015261205581612019565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006120b860248361198f565b91506120c38261205c565b604082019050919050565b600060208201905081810360008301526120e7816120ab565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b600061214a60228361198f565b9150612155826120ee565b604082019050919050565b600060208201905081810360008301526121798161213d565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006121dc60258361198f565b91506121e782612180565b604082019050919050565b6000602082019050818103600083015261220b816121cf565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b600061226e60238361198f565b915061227982612212565b604082019050919050565b6000602082019050818103600083015261229d81612261565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061230060268361198f565b915061230b826122a4565b604082019050919050565b6000602082019050818103600083015261232f816122f3565b9050919050565b600081905092915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b6000612377601783612336565b915061238282612341565b601782019050919050565b600061239882611984565b6123a28185612336565b93506123b28185602086016119a0565b80840191505092915050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006123f4601183612336565b91506123ff826123be565b601182019050919050565b60006124158261236a565b9150612421828561238d565b915061242c826123e7565b9150612438828461238d565b91508190509392505050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061247a601f8361198f565b915061248582612444565b602082019050919050565b600060208201905081810360008301526124a98161246d565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b600061250c60218361198f565b9150612517826124b0565b604082019050919050565b6000602082019050818103600083015261253b816124ff565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b600061259e60228361198f565b91506125a982612542565b604082019050919050565b600060208201905081810360008301526125cd81612591565b9050919050565b60006125df82611a9d565b91506125ea83611a9d565b9250828210156125fd576125fc611eb3565b5b828203905092915050565b600061261382611a9d565b915061261e83611a9d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561265757612656611eb3565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006126cb82611a9d565b915060008214156126df576126de611eb3565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061272060208361198f565b915061272b826126ea565b602082019050919050565b6000602082019050818103600083015261274f81612713565b905091905056fea26469706673582212200675bfc7fcc6a4f5f8c33512f874bbb6c9e8993b4da0ab991a79837c1b690d3b64736f6c63430008090033";

type ERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Token__factory extends ContractFactory {
  constructor(...args: ERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ERC20Token";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Token> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ERC20Token>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ERC20Token {
    return super.attach(address) as ERC20Token;
  }
  connect(signer: Signer): ERC20Token__factory {
    return super.connect(signer) as ERC20Token__factory;
  }
  static readonly contractName: "ERC20Token";
  public readonly contractName: "ERC20Token";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TokenInterface {
    return new utils.Interface(_abi) as ERC20TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Token {
    return new Contract(address, _abi, signerOrProvider) as ERC20Token;
  }
}
