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
  "0x60806040523480156200001157600080fd5b5060405162002ae538038062002ae583398181016040528101906200003791906200023c565b620000576200004b6200014260201b60201c565b6200014a60201b60201c565b85600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826007819055508160098190555080600a819055504260088190555050505050505062000344565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200021f8162000310565b92915050565b60008151905062000236816200032a565b92915050565b60008060008060008060c087890312156200025657600080fd5b60006200026689828a016200020e565b96505060206200027989828a016200020e565b95505060406200028c89828a016200020e565b94505060606200029f89828a0162000225565b9350506080620002b289828a0162000225565b92505060a0620002c589828a0162000225565b9150509295509295509295565b6000620002df82620002e6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200031b81620002d2565b81146200032757600080fd5b50565b620003358162000306565b81146200034157600080fd5b50565b61279180620003546000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806378b4330f116100f9578063aaf5eb6811610097578063c8f33c9111610071578063c8f33c9114610466578063e07ae09214610484578063e1d929d7146104a2578063f2fde38b146104c0576101a9565b8063aaf5eb681461040c578063b190a96e1461042a578063c76b45ec14610448576101a9565b8063817b1cd2116100d3578063817b1cd2146103825780638790c5ee146103a05780638da5cb5b146103d05780639829021d146103ee576101a9565b806378b4330f1461033e5780637a1cff771461035c5780637b0472f014610366576101a9565b8063372500ab116101665780634f1bfc9e116101405780634f1bfc9e146102c85780636e66f6e9146102e6578063715018a61461030457806374dc243a1461030e576101a9565b8063372500ab1461025e5780633b521efe146102685780634861662a14610298576101a9565b8063033c10ac146101ae5780630fb5a6b4146101cc5780631254eb93146101ea578063228cb733146102085780632e17de781461022657806334c5d2ce14610242575b600080fd5b6101b66104dc565b6040516101c39190612262565b60405180910390f35b6101d46104e2565b6040516101e19190612262565b60405180910390f35b6101f26104e8565b6040516101ff9190612262565b60405180910390f35b6102106104ee565b60405161021d9190612262565b60405180910390f35b610240600480360381019061023b9190611d85565b6104f4565b005b61025c60048036038101906102579190611dea565b6108ce565b005b610266610964565b005b610282600480360381019061027d9190611d20565b610a96565b60405161028f9190612247565b60405180910390f35b6102b260048036038101906102ad9190611d85565b610ba6565b6040516102bf9190612262565b60405180910390f35b6102d0610c18565b6040516102dd9190612262565b60405180910390f35b6102ee610c20565b6040516102fb91906120e8565b60405180910390f35b61030c610c46565b005b61032860048036038101906103239190611cf7565b610cce565b604051610335919061222c565b60405180910390f35b610346610d67565b6040516103539190612262565b60405180910390f35b610364610d6d565b005b610380600480360381019061037b9190611dae565b610dc4565b005b61038a6111d4565b6040516103979190612262565b60405180910390f35b6103ba60048036038101906103b59190611cf7565b6111da565b6040516103c79190612262565b60405180910390f35b6103d8611297565b6040516103e5919061206d565b60405180910390f35b6103f66112c0565b6040516104039190612103565b60405180910390f35b6104146112e6565b6040516104219190612262565b60405180910390f35b6104326112f2565b60405161043f9190612262565b60405180910390f35b6104506112f8565b60405161045d91906120e8565b60405180910390f35b61046e61131e565b60405161047b9190612262565b60405180910390f35b61048c611324565b6040516104999190612262565b60405180910390f35b6104aa61132a565b6040516104b79190612262565b60405180910390f35b6104da60048036038101906104d59190611cf7565b611330565b005b600b5481565b600a5481565b600c5481565b60075481565b6000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008481526020019081526020016000209050610593610d6d565b60006105b68260000154836001015484600201546105b19190612390565b611428565b905082600301548360010154600b546105cf9190612336565b6105d99190612390565b8360020160008282546105ec91906122af565b9250508190555060028260030160006101000a81548160ff02191690836002811115610641577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550816000015483600001600082825461065e9190612390565b92505081905550808360010160008282546106799190612390565b9250508190555061068d8360010154611486565b83600301819055506106e684600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061149d90919063ffffffff16565b508160000154600460008282546106fd9190612390565b92505081905550610755338360000154600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166114b79092919063ffffffff16565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166379cc679033836040518363ffffffff1660e01b81526004016107b29291906120bf565b600060405180830381600087803b1580156107cc57600080fd5b505af11580156107e0573d6000803e3d6000fd5b5050505060006107ef336111da565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b815260040161084e9291906120bf565b600060405180830381600087803b15801561086857600080fd5b505af115801561087c573d6000803e3d6000fd5b50505050670de0b6b3a7640000816108949190612336565b8460030160008282546108a791906122af565b9250508190555080600660008282546108c091906122af565b925050819055505050505050565b6108d661153d565b73ffffffffffffffffffffffffffffffffffffffff166108f4611297565b73ffffffffffffffffffffffffffffffffffffffff161461094a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610941906121cc565b60405180910390fd5b826007819055508160098190555080600a81905550505050565b61096c610d6d565b6000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006109ba336111da565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401610a199291906120bf565b600060405180830381600087803b158015610a3357600080fd5b505af1158015610a47573d6000803e3d6000fd5b50505050670de0b6b3a764000081610a5f9190612336565b826003016000828254610a7291906122af565b925050819055508060066000828254610a8b91906122af565b925050819055505050565b610a9e611c30565b600e60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff166002811115610b62577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811115610b9a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525050905092915050565b6000806005541415610bbb5760009050610c13565b81600a54600554610bcc9190612336565b600954670de0b6b3a7640000600754610be59190612336565b610bef9190612336565b610bf99190612305565b610c039190612336565b600b54610c1091906122af565b90505b919050565b6301dfe20081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c4e61153d565b73ffffffffffffffffffffffffffffffffffffffff16610c6c611297565b73ffffffffffffffffffffffffffffffffffffffff1614610cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb9906121cc565b60405180910390fd5b610ccc6000611545565b565b610cd6611c90565b6000600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820154815250509050610d55836111da565b81604001818152505080915050919050565b61025881565b600060095460085442610d809190612390565b610d8a9190612305565b905060095481610d9a9190612336565b60086000828254610dab91906122af565b92505081905550610dbb81610ba6565b600b8190555050565b610e13333084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611609909392919063ffffffff16565b610e1b610d6d565b6000610e346301dfe2008361169290919063ffffffff16565b9050610e4b610258826116ab90919063ffffffff16565b90506000610e598483611428565b905060405180608001604052808581526020014281526020018342610e7e91906122af565b815260200160016002811115610ebd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600c54815260200190815260200160002060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548160ff02191690836002811115610f81577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550905050610ff0600c6000815480929190610f9f906124ac565b91905055600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206116c590919063ffffffff16565b50836004600082825461100391906122af565b92505081905550806005600082825461101c91906122af565b9250508190555061102c81611486565b600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600301600082825461107d91906122af565b9250508190555083600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546110d691906122af565b9250508190555080600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825461112f91906122af565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f193361117f8786611428565b6040518363ffffffff1660e01b815260040161119c9291906120bf565b600060405180830381600087803b1580156111b657600080fd5b505af11580156111ca573d6000803e3d6000fd5b5050505050505050565b60045481565b600080600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905061124c60405180606001604052806030815260200161272c60309139600b54836001015484600301546116df565b670de0b6b3a7640000816003015482600201548360010154600b546112719190612336565b61127b91906122af565b6112859190612390565b61128f9190612305565b915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b670de0b6b3a764000081565b60055481565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60085481565b60065481565b60095481565b61133861153d565b73ffffffffffffffffffffffffffffffffffffffff16611356611297565b73ffffffffffffffffffffffffffffffffffffffff16146113ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a3906121cc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561141c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114139061218c565b60405180910390fd5b61142581611545565b50565b6000670de0b6b3a76400006301dfe20083670de0b6b3a764000061144c9190612336565b6114569190612305565b670de0b6b3a764000061146991906122af565b846114749190612336565b61147e9190612305565b905092915050565b6000600b54826114969190612336565b9050919050565b60006114af836000018360001b611781565b905092915050565b6115388363a9059cbb60e01b84846040516024016114d69291906120bf565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611907565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61168c846323b872dd60e01b85858560405160240161162a93929190612088565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611907565b50505050565b60008183106116a157816116a3565b825b905092915050565b6000818310156116bb57816116bd565b825b905092915050565b60006116d7836000018360001b6119ce565b905092915050565b61177b848484846040516024016116f99493929190612140565b6040516020818303038152906040527f08ee5666000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611a3e565b50505050565b600080836001016000848152602001908152602001600020549050600081146118fb5760006001826117b39190612390565b90506000600186600001805490506117cb9190612390565b9050818114611886576000866000018281548110611812577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508087600001848154811061185c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b856000018054806118c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611901565b60009150505b92915050565b6000611969826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a679092919063ffffffff16565b90506000815111156119c957808060200190518101906119899190611d5c565b6119c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119bf9061220c565b60405180910390fd5b5b505050565b60006119da8383611a7f565b611a33578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611a38565b600090505b92915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6060611a768484600085611aa2565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606082471015611ae7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ade906121ac565b60405180910390fd5b611af085611bb6565b611b2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b26906121ec565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611b589190612056565b60006040518083038185875af1925050503d8060008114611b95576040519150601f19603f3d011682016040523d82523d6000602084013e611b9a565b606091505b5091509150611baa828286611bc9565b92505050949350505050565b600080823b905060008111915050919050565b60608315611bd957829050611c29565b600083511115611bec5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c20919061211e565b60405180910390fd5b9392505050565b604051806080016040528060008152602001600081526020016000815260200160006002811115611c8a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b600081359050611cc7816126e6565b92915050565b600081519050611cdc816126fd565b92915050565b600081359050611cf181612714565b92915050565b600060208284031215611d0957600080fd5b6000611d1784828501611cb8565b91505092915050565b60008060408385031215611d3357600080fd5b6000611d4185828601611cb8565b9250506020611d5285828601611ce2565b9150509250929050565b600060208284031215611d6e57600080fd5b6000611d7c84828501611ccd565b91505092915050565b600060208284031215611d9757600080fd5b6000611da584828501611ce2565b91505092915050565b60008060408385031215611dc157600080fd5b6000611dcf85828601611ce2565b9250506020611de085828601611ce2565b9150509250929050565b600080600060608486031215611dff57600080fd5b6000611e0d86828701611ce2565b9350506020611e1e86828701611ce2565b9250506040611e2f86828701611ce2565b9150509250925092565b611e42816123c4565b82525050565b6000611e538261227d565b611e5d8185612293565b9350611e6d818560208601612479565b80840191505092915050565b611e828161241f565b82525050565b611e9181612443565b82525050565b611ea081612467565b82525050565b6000611eb182612288565b611ebb818561229e565b9350611ecb818560208601612479565b611ed481612582565b840191505092915050565b6000611eec60268361229e565b9150611ef782612593565b604082019050919050565b6000611f0f60268361229e565b9150611f1a826125e2565b604082019050919050565b6000611f3260208361229e565b9150611f3d82612631565b602082019050919050565b6000611f55601d8361229e565b9150611f608261265a565b602082019050919050565b6000611f78602a8361229e565b9150611f8382612683565b604082019050919050565b608082016000820151611fa46000850182612038565b506020820151611fb76020850182612038565b506040820151611fca6040850182612038565b506060820151611fdd6060850182612038565b50505050565b608082016000820151611ff96000850182612038565b50602082015161200c6020850182612038565b50604082015161201f6040850182612038565b5060608201516120326060850182611e97565b50505050565b61204181612415565b82525050565b61205081612415565b82525050565b60006120628284611e48565b915081905092915050565b60006020820190506120826000830184611e39565b92915050565b600060608201905061209d6000830186611e39565b6120aa6020830185611e39565b6120b76040830184612047565b949350505050565b60006040820190506120d46000830185611e39565b6120e16020830184612047565b9392505050565b60006020820190506120fd6000830184611e79565b92915050565b60006020820190506121186000830184611e88565b92915050565b600060208201905081810360008301526121388184611ea6565b905092915050565b6000608082019050818103600083015261215a8187611ea6565b90506121696020830186612047565b6121766040830185612047565b6121836060830184612047565b95945050505050565b600060208201905081810360008301526121a581611edf565b9050919050565b600060208201905081810360008301526121c581611f02565b9050919050565b600060208201905081810360008301526121e581611f25565b9050919050565b6000602082019050818103600083015261220581611f48565b9050919050565b6000602082019050818103600083015261222581611f6b565b9050919050565b60006080820190506122416000830184611f8e565b92915050565b600060808201905061225c6000830184611fe3565b92915050565b60006020820190506122776000830184612047565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006122ba82612415565b91506122c583612415565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156122fa576122f96124f5565b5b828201905092915050565b600061231082612415565b915061231b83612415565b92508261232b5761232a612524565b5b828204905092915050565b600061234182612415565b915061234c83612415565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612385576123846124f5565b5b828202905092915050565b600061239b82612415565b91506123a683612415565b9250828210156123b9576123b86124f5565b5b828203905092915050565b60006123cf826123f5565b9050919050565b60008115159050919050565b60008190506123f0826126d2565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061242a82612431565b9050919050565b600061243c826123f5565b9050919050565b600061244e82612455565b9050919050565b6000612460826123f5565b9050919050565b6000612472826123e2565b9050919050565b60005b8381101561249757808201518184015260208101905061247c565b838111156124a6576000848401525b50505050565b60006124b782612415565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156124ea576124e96124f5565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b600381106126e3576126e2612553565b5b50565b6126ef816123c4565b81146126fa57600080fd5b50565b612706816123d6565b811461271157600080fd5b50565b61271d81612415565b811461272857600080fd5b5056fe5470733a2025732c205374616b6564576974685765696768743a2025732c20526577617264206d69737365643a202573a2646970667358221220e102a201894a8742a6a3c78a55ac2890432c4b23e78730308ab757a18657f9a664736f6c63430008040033";

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
