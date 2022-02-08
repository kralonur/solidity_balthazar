/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Staking, StakingInterface } from "../Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressTokenMain",
        type: "address",
      },
      {
        internalType: "address",
        name: "addressTokenStake",
        type: "address",
      },
      {
        internalType: "address",
        name: "addressTokenReward",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenClaimPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_LOCK_DURATION",
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
    inputs: [],
    name: "MIN_LOCK_DURATION",
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
    inputs: [],
    name: "PRECISION",
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
        name: "stakeHolderAddress",
        type: "address",
      },
    ],
    name: "calculateAvailableRewards",
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
        name: "passedTime",
        type: "uint256",
      },
    ],
    name: "calculateTps",
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
    inputs: [],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "duration",
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
        name: "stakeHolderAddress",
        type: "address",
      },
    ],
    name: "getStakeHolder",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "staked",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakedWithWeight",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableReward",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rewardMissed",
            type: "uint256",
          },
        ],
        internalType: "struct Staking.StakeHolder",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stakeHolder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stakeId",
        type: "uint256",
      },
    ],
    name: "getStakeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakeTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "unstakeTime",
            type: "uint256",
          },
          {
            internalType: "enum Staking.StakeStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct Staking.StakeInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdateTime",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reward",
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
    inputs: [],
    name: "rewardProduced",
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
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenClaimPeriod",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    name: "setParameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeId",
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
    inputs: [],
    name: "tokenClaimPeriod",
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
    inputs: [],
    name: "tokenMain",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenReward",
    outputs: [
      {
        internalType: "contract IERC20NoTransfer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenStake",
    outputs: [
      {
        internalType: "contract IERC20NoTransfer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStaked",
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
    inputs: [],
    name: "totalStakedWithWeight",
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
    inputs: [],
    name: "tps",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_stakeId",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateValues",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200296c3803806200296c83398181016040528101906200003791906200023c565b620000576200004b6200014260201b60201c565b6200014a60201b60201c565b85600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826007819055508160098190555080600a819055504260088190555050505050505062000344565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200021f8162000310565b92915050565b60008151905062000236816200032a565b92915050565b60008060008060008060c087890312156200025657600080fd5b60006200026689828a016200020e565b96505060206200027989828a016200020e565b95505060406200028c89828a016200020e565b94505060606200029f89828a0162000225565b9350506080620002b289828a0162000225565b92505060a0620002c589828a0162000225565b9150509295509295509295565b6000620002df82620002e6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200031b81620002d2565b81146200032757600080fd5b50565b620003358162000306565b81146200034157600080fd5b50565b61261880620003546000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806378b4330f116100f9578063aaf5eb6811610097578063c8f33c9111610071578063c8f33c9114610466578063e07ae09214610484578063e1d929d7146104a2578063f2fde38b146104c0576101a9565b8063aaf5eb681461040c578063b190a96e1461042a578063c76b45ec14610448576101a9565b8063817b1cd2116100d3578063817b1cd2146103825780638790c5ee146103a05780638da5cb5b146103d05780639829021d146103ee576101a9565b806378b4330f1461033e5780637a1cff771461035c5780637b0472f014610366576101a9565b8063372500ab116101665780634f1bfc9e116101405780634f1bfc9e146102c85780636e66f6e9146102e6578063715018a61461030457806374dc243a1461030e576101a9565b8063372500ab1461025e5780633b521efe146102685780634861662a14610298576101a9565b8063033c10ac146101ae5780630fb5a6b4146101cc5780631254eb93146101ea578063228cb733146102085780632e17de781461022657806334c5d2ce14610242575b600080fd5b6101b66104dc565b6040516101c391906120e9565b60405180910390f35b6101d46104e2565b6040516101e191906120e9565b60405180910390f35b6101f26104e8565b6040516101ff91906120e9565b60405180910390f35b6102106104ee565b60405161021d91906120e9565b60405180910390f35b610240600480360381019061023b9190611c0c565b6104f4565b005b61025c60048036038101906102579190611c71565b610755565b005b6102666107eb565b005b610282600480360381019061027d9190611ba7565b61091d565b60405161028f91906120ce565b60405180910390f35b6102b260048036038101906102ad9190611c0c565b610a2d565b6040516102bf91906120e9565b60405180910390f35b6102d0610a9f565b6040516102dd91906120e9565b60405180910390f35b6102ee610aa7565b6040516102fb9190611f6f565b60405180910390f35b61030c610acd565b005b61032860048036038101906103239190611b7e565b610b55565b60405161033591906120b3565b60405180910390f35b610346610bee565b60405161035391906120e9565b60405180910390f35b610364610bf4565b005b610380600480360381019061037b9190611c35565b610c4b565b005b61038a61105b565b60405161039791906120e9565b60405180910390f35b6103ba60048036038101906103b59190611b7e565b611061565b6040516103c791906120e9565b60405180910390f35b6103d861111e565b6040516103e59190611ef4565b60405180910390f35b6103f6611147565b6040516104039190611f8a565b60405180910390f35b61041461116d565b60405161042191906120e9565b60405180910390f35b610432611179565b60405161043f91906120e9565b60405180910390f35b61045061117f565b60405161045d9190611f6f565b60405180910390f35b61046e6111a5565b60405161047b91906120e9565b60405180910390f35b61048c6111ab565b60405161049991906120e9565b60405180910390f35b6104aa6111b1565b6040516104b791906120e9565b60405180910390f35b6104da60048036038101906104d59190611b7e565b6111b7565b005b600b5481565b600a5481565b600c5481565b60075481565b6000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000209050610593610bf4565b81600301548260010154600b546105aa91906121bd565b6105b49190612217565b8260020160008282546105c79190612136565b9250508190555060028160030160006101000a81548160ff0219169083600281111561061c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555080600001548260000160008282546106399190612217565b9250508190555061066181600001548260010154836002015461065c9190612217565b6112af565b8260010160008282546106749190612217565b92505081905550610688826001015461130d565b82600301819055506106e183600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061132490919063ffffffff16565b508060000154600460008282546106f89190612217565b92505081905550610750338260000154600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661133e9092919063ffffffff16565b505050565b61075d6113c4565b73ffffffffffffffffffffffffffffffffffffffff1661077b61111e565b73ffffffffffffffffffffffffffffffffffffffff16146107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890612053565b60405180910390fd5b826007819055508160098190555080600a81905550505050565b6107f3610bf4565b6000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600061084133611061565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b81526004016108a0929190611f46565b600060405180830381600087803b1580156108ba57600080fd5b505af11580156108ce573d6000803e3d6000fd5b50505050670de0b6b3a7640000816108e691906121bd565b8260030160008282546108f99190612136565b9250508190555080600660008282546109129190612136565b925050819055505050565b610925611ab7565b600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff1660028111156109e9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811115610a21577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525050905092915050565b6000806005541415610a425760009050610a9a565b81600a54600554610a5391906121bd565b600954670de0b6b3a7640000600754610a6c91906121bd565b610a7691906121bd565b610a80919061218c565b610a8a91906121bd565b600b54610a979190612136565b90505b919050565b6301dfe20081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610ad56113c4565b73ffffffffffffffffffffffffffffffffffffffff16610af361111e565b73ffffffffffffffffffffffffffffffffffffffff1614610b49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4090612053565b60405180910390fd5b610b5360006113cc565b565b610b5d611b17565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820154815250509050610bdc83611061565b81604001818152505080915050919050565b61025881565b600060095460085442610c079190612217565b610c11919061218c565b905060095481610c2191906121bd565b60086000828254610c329190612136565b92505081905550610c4281610a2d565b600b8190555050565b610c9a333084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611490909392919063ffffffff16565b610ca2610bf4565b6000610cbb6301dfe2008361151990919063ffffffff16565b9050610cd26102588261153290919063ffffffff16565b90506000610ce084836112af565b905060405180608001604052808581526020014281526020018342610d059190612136565b815260200160016002811115610d44577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600c54815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690836002811115610e08577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550905050610e77600c6000815480929190610e2690612333565b91905055600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061154c90919063ffffffff16565b508360046000828254610e8a9190612136565b925050819055508060056000828254610ea39190612136565b92505081905550610eb38161130d565b600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003016000828254610f049190612136565b9250508190555083600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610f5d9190612136565b9250508190555080600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001016000828254610fb69190612136565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193361100687866112af565b6040518363ffffffff1660e01b8152600401611023929190611f46565b600060405180830381600087803b15801561103d57600080fd5b505af1158015611051573d6000803e3d6000fd5b5050505050505050565b60045481565b600080600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506110d36040518060600160405280603081526020016125b360309139600b5483600101548460030154611566565b670de0b6b3a7640000816003015482600201548360010154600b546110f891906121bd565b6111029190612136565b61110c9190612217565b611116919061218c565b915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b670de0b6b3a764000081565b60055481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b60065481565b60095481565b6111bf6113c4565b73ffffffffffffffffffffffffffffffffffffffff166111dd61111e565b73ffffffffffffffffffffffffffffffffffffffff1614611233576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122a90612053565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156112a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129a90612013565b60405180910390fd5b6112ac816113cc565b50565b6000670de0b6b3a76400006301dfe20083670de0b6b3a76400006112d391906121bd565b6112dd919061218c565b670de0b6b3a76400006112f09190612136565b846112fb91906121bd565b611305919061218c565b905092915050565b6000600b548261131d91906121bd565b9050919050565b6000611336836000018360001b611608565b905092915050565b6113bf8363a9059cbb60e01b848460405160240161135d929190611f46565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061178e565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611513846323b872dd60e01b8585856040516024016114b193929190611f0f565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061178e565b50505050565b6000818310611528578161152a565b825b905092915050565b6000818310156115425781611544565b825b905092915050565b600061155e836000018360001b611855565b905092915050565b611602848484846040516024016115809493929190611fc7565b6040516020818303038152906040527f08ee5666000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506118c5565b50505050565b6000808360010160008481526020019081526020016000205490506000811461178257600060018261163a9190612217565b90506000600186600001805490506116529190612217565b905081811461170d576000866000018281548110611699577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050808760000184815481106116e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480611747577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611788565b60009150505b92915050565b60006117f0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118ee9092919063ffffffff16565b905060008151111561185057808060200190518101906118109190611be3565b61184f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184690612093565b60405180910390fd5b5b505050565b60006118618383611906565b6118ba5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506118bf565b600090505b92915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60606118fd8484600085611929565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561196e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161196590612033565b60405180910390fd5b61197785611a3d565b6119b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119ad90612073565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119df9190611edd565b60006040518083038185875af1925050503d8060008114611a1c576040519150601f19603f3d011682016040523d82523d6000602084013e611a21565b606091505b5091509150611a31828286611a50565b92505050949350505050565b600080823b905060008111915050919050565b60608315611a6057829050611ab0565b600083511115611a735782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611aa79190611fa5565b60405180910390fd5b9392505050565b604051806080016040528060008152602001600081526020016000815260200160006002811115611b11577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b600081359050611b4e8161256d565b92915050565b600081519050611b6381612584565b92915050565b600081359050611b788161259b565b92915050565b600060208284031215611b9057600080fd5b6000611b9e84828501611b3f565b91505092915050565b60008060408385031215611bba57600080fd5b6000611bc885828601611b3f565b9250506020611bd985828601611b69565b9150509250929050565b600060208284031215611bf557600080fd5b6000611c0384828501611b54565b91505092915050565b600060208284031215611c1e57600080fd5b6000611c2c84828501611b69565b91505092915050565b60008060408385031215611c4857600080fd5b6000611c5685828601611b69565b9250506020611c6785828601611b69565b9150509250929050565b600080600060608486031215611c8657600080fd5b6000611c9486828701611b69565b9350506020611ca586828701611b69565b9250506040611cb686828701611b69565b9150509250925092565b611cc98161224b565b82525050565b6000611cda82612104565b611ce4818561211a565b9350611cf4818560208601612300565b80840191505092915050565b611d09816122a6565b82525050565b611d18816122ca565b82525050565b611d27816122ee565b82525050565b6000611d388261210f565b611d428185612125565b9350611d52818560208601612300565b611d5b81612409565b840191505092915050565b6000611d73602683612125565b9150611d7e8261241a565b604082019050919050565b6000611d96602683612125565b9150611da182612469565b604082019050919050565b6000611db9602083612125565b9150611dc4826124b8565b602082019050919050565b6000611ddc601d83612125565b9150611de7826124e1565b602082019050919050565b6000611dff602a83612125565b9150611e0a8261250a565b604082019050919050565b608082016000820151611e2b6000850182611ebf565b506020820151611e3e6020850182611ebf565b506040820151611e516040850182611ebf565b506060820151611e646060850182611ebf565b50505050565b608082016000820151611e806000850182611ebf565b506020820151611e936020850182611ebf565b506040820151611ea66040850182611ebf565b506060820151611eb96060850182611d1e565b50505050565b611ec88161229c565b82525050565b611ed78161229c565b82525050565b6000611ee98284611ccf565b915081905092915050565b6000602082019050611f096000830184611cc0565b92915050565b6000606082019050611f246000830186611cc0565b611f316020830185611cc0565b611f3e6040830184611ece565b949350505050565b6000604082019050611f5b6000830185611cc0565b611f686020830184611ece565b9392505050565b6000602082019050611f846000830184611d00565b92915050565b6000602082019050611f9f6000830184611d0f565b92915050565b60006020820190508181036000830152611fbf8184611d2d565b905092915050565b60006080820190508181036000830152611fe18187611d2d565b9050611ff06020830186611ece565b611ffd6040830185611ece565b61200a6060830184611ece565b95945050505050565b6000602082019050818103600083015261202c81611d66565b9050919050565b6000602082019050818103600083015261204c81611d89565b9050919050565b6000602082019050818103600083015261206c81611dac565b9050919050565b6000602082019050818103600083015261208c81611dcf565b9050919050565b600060208201905081810360008301526120ac81611df2565b9050919050565b60006080820190506120c86000830184611e15565b92915050565b60006080820190506120e36000830184611e6a565b92915050565b60006020820190506120fe6000830184611ece565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006121418261229c565b915061214c8361229c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156121815761218061237c565b5b828201905092915050565b60006121978261229c565b91506121a28361229c565b9250826121b2576121b16123ab565b5b828204905092915050565b60006121c88261229c565b91506121d38361229c565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561220c5761220b61237c565b5b828202905092915050565b60006122228261229c565b915061222d8361229c565b9250828210156122405761223f61237c565b5b828203905092915050565b60006122568261227c565b9050919050565b60008115159050919050565b600081905061227782612559565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006122b1826122b8565b9050919050565b60006122c38261227c565b9050919050565b60006122d5826122dc565b9050919050565b60006122e78261227c565b9050919050565b60006122f982612269565b9050919050565b60005b8381101561231e578082015181840152602081019050612303565b8381111561232d576000848401525b50505050565b600061233e8261229c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156123715761237061237c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6003811061256a576125696123da565b5b50565b6125768161224b565b811461258157600080fd5b50565b61258d8161225d565b811461259857600080fd5b50565b6125a48161229c565b81146125af57600080fd5b5056fe5470733a2025732c205374616b6564576974685765696768743a2025732c20526577617264206d69737365643a202573a2646970667358221220129f7c66095f4e7a1252240327ec1456f39a0324a16e342ebdb01a8770ff64fe64736f6c63430008040033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Staking";
  }

  deploy(
    addressTokenMain: string,
    addressTokenStake: string,
    addressTokenReward: string,
    _reward: BigNumberish,
    _tokenClaimPeriod: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Staking> {
    return super.deploy(
      addressTokenMain,
      addressTokenStake,
      addressTokenReward,
      _reward,
      _tokenClaimPeriod,
      _duration,
      overrides || {}
    ) as Promise<Staking>;
  }
  getDeployTransaction(
    addressTokenMain: string,
    addressTokenStake: string,
    addressTokenReward: string,
    _reward: BigNumberish,
    _tokenClaimPeriod: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressTokenMain,
      addressTokenStake,
      addressTokenReward,
      _reward,
      _tokenClaimPeriod,
      _duration,
      overrides || {}
    );
  }
  attach(address: string): Staking {
    return super.attach(address) as Staking;
  }
  connect(signer: Signer): Staking__factory {
    return super.connect(signer) as Staking__factory;
  }
  static readonly contractName: "Staking";
  public readonly contractName: "Staking";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new utils.Interface(_abi) as StakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Staking {
    return new Contract(address, _abi, signerOrProvider) as Staking;
  }
}
