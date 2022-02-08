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
  "0x60806040523480156200001157600080fd5b506040516200280f3803806200280f83398181016040528101906200003791906200023c565b620000576200004b6200014260201b60201c565b6200014a60201b60201c565b85600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260068190555081600881905550806009819055504260078190555050505050505062000344565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200021f8162000310565b92915050565b60008151905062000236816200032a565b92915050565b60008060008060008060c087890312156200025657600080fd5b60006200026689828a016200020e565b96505060206200027989828a016200020e565b95505060406200028c89828a016200020e565b94505060606200029f89828a0162000225565b9350506080620002b289828a0162000225565b92505060a0620002c589828a0162000225565b9150509295509295509295565b6000620002df82620002e6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200031b81620002d2565b81146200032757600080fd5b50565b620003358162000306565b81146200034157600080fd5b50565b6124bb80620003546000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806378b4330f116100de5780639829021d11610097578063c8f33c9111610071578063c8f33c911461042d578063e07ae0921461044b578063e1d929d714610469578063f2fde38b146104875761018e565b80639829021d146103d3578063aaf5eb68146103f1578063c76b45ec1461040f5761018e565b806378b4330f146103235780637a1cff77146103415780637b0472f01461034b578063817b1cd2146103675780638790c5ee146103855780638da5cb5b146103b55761018e565b8063372500ab1161014b5780634f1bfc9e116101255780634f1bfc9e146102ad5780636e66f6e9146102cb578063715018a6146102e957806374dc243a146102f35761018e565b8063372500ab146102435780633b521efe1461024d5780634861662a1461027d5761018e565b8063033c10ac146101935780630fb5a6b4146101b15780631254eb93146101cf578063228cb733146101ed5780632e17de781461020b57806334c5d2ce14610227575b600080fd5b61019b6104a3565b6040516101a89190611f96565b60405180910390f35b6101b96104a9565b6040516101c69190611f96565b60405180910390f35b6101d76104af565b6040516101e49190611f96565b60405180910390f35b6101f56104b5565b6040516102029190611f96565b60405180910390f35b61022560048036038101906102209190611adf565b6104bb565b005b610241600480360381019061023c9190611b44565b6106e1565b005b61024b610777565b005b61026760048036038101906102629190611a7a565b6108a9565b6040516102749190611f7b565b60405180910390f35b61029760048036038101906102929190611adf565b6109af565b6040516102a49190611f96565b60405180910390f35b6102b5610a21565b6040516102c29190611f96565b60405180910390f35b6102d3610a29565b6040516102e09190611e1c565b60405180910390f35b6102f1610a4f565b005b61030d60048036038101906103089190611a51565b610ad7565b60405161031a9190611f60565b60405180910390f35b61032b610b66565b6040516103389190611f96565b60405180910390f35b610349610b6c565b005b61036560048036038101906103609190611b08565b610bc3565b005b61036f610f42565b60405161037c9190611f96565b60405180910390f35b61039f600480360381019061039a9190611a51565b610f48565b6040516103ac9190611f96565b60405180910390f35b6103bd611005565b6040516103ca9190611da1565b60405180910390f35b6103db61102e565b6040516103e89190611e37565b60405180910390f35b6103f9611054565b6040516104069190611f96565b60405180910390f35b610417611060565b6040516104249190611e1c565b60405180910390f35b610435611086565b6040516104429190611f96565b60405180910390f35b61045361108c565b6040516104609190611f96565b60405180910390f35b610471611092565b60405161047e9190611f96565b60405180910390f35b6104a1600480360381019061049c9190611a51565b611098565b005b600a5481565b60095481565b600b5481565b60065481565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020905061055a610b6c565b81600201548260000154600a54610571919061206a565b61057b91906120c4565b82600101600082825461058e9190611fe3565b9250508190555060028160020160006101000a81548160ff021916908360028111156105e3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550806000015482600001600082825461060091906120c4565b925050819055506106148260000154611190565b826002018190555061066d83600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206111a790919063ffffffff16565b5080600001546004600082825461068491906120c4565b925050819055506106dc338260000154600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111c19092919063ffffffff16565b505050565b6106e9611247565b73ffffffffffffffffffffffffffffffffffffffff16610707611005565b73ffffffffffffffffffffffffffffffffffffffff161461075d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075490611f00565b60405180910390fd5b826006819055508160088190555080600981905550505050565b61077f610b6c565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060006107cd33610f48565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b815260040161082c929190611df3565b600060405180830381600087803b15801561084657600080fd5b505af115801561085a573d6000803e3d6000fd5b50505050670de0b6b3a764000081610872919061206a565b8260020160008282546108859190611fe3565b92505081905550806005600082825461089e9190611fe3565b925050819055505050565b6108b1611998565b600d60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820160009054906101000a900460ff16600281111561096b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028111156109a3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525050905092915050565b60008060045414156109c45760009050610a1c565b816009546004546109d5919061206a565b600854670de0b6b3a76400006006546109ee919061206a565b6109f8919061206a565b610a029190612039565b610a0c919061206a565b600a54610a199190611fe3565b90505b919050565b6301dfe20081565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610a57611247565b73ffffffffffffffffffffffffffffffffffffffff16610a75611005565b73ffffffffffffffffffffffffffffffffffffffff1614610acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac290611f00565b60405180910390fd5b610ad5600061124f565b565b610adf6119f1565b6000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180606001604052908160008201548152602001600182015481526020016002820154815250509050610b5483610f48565b81602001818152505080915050919050565b61025881565b600060085460075442610b7f91906120c4565b610b899190612039565b905060085481610b99919061206a565b60076000828254610baa9190611fe3565b92505081905550610bba816109af565b600a8190555050565b610c12333084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16611313909392919063ffffffff16565b610c1a610b6c565b6000610c336301dfe2008361139c90919063ffffffff16565b9050610c4a610258826113b590919063ffffffff16565b905060405180606001604052808481526020018242610c699190611fe3565b815260200160016002811115610ca8577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250600d60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000600b548152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548160ff02191690836002811115610d62577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b0217905550905050610dd1600b6000815480929190610d80906121e0565b91905055600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206113cf90919063ffffffff16565b508260046000828254610de49190611fe3565b92505081905550610df483611190565b600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254610e459190611fe3565b9250508190555082600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254610e9e9190611fe3565b92505081905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933610eee86856113e9565b6040518363ffffffff1660e01b8152600401610f0b929190611df3565b600060405180830381600087803b158015610f2557600080fd5b505af1158015610f39573d6000803e3d6000fd5b50505050505050565b60045481565b600080600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050610fba60405180606001604052806026815260200161246060269139600a5483600001548460020154611447565b670de0b6b3a7640000816002015482600101548360000154600a54610fdf919061206a565b610fe99190611fe3565b610ff391906120c4565b610ffd9190612039565b915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b670de0b6b3a764000081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60055481565b60085481565b6110a0611247565b73ffffffffffffffffffffffffffffffffffffffff166110be611005565b73ffffffffffffffffffffffffffffffffffffffff1614611114576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110b90611f00565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611184576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117b90611ec0565b60405180910390fd5b61118d8161124f565b50565b6000600a54826111a0919061206a565b9050919050565b60006111b9836000018360001b6114e9565b905092915050565b6112428363a9059cbb60e01b84846040516024016111e0929190611df3565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061166f565b505050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b611396846323b872dd60e01b85858560405160240161133493929190611dbc565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061166f565b50505050565b60008183106113ab57816113ad565b825b905092915050565b6000818310156113c557816113c7565b825b905092915050565b60006113e1836000018360001b611736565b905092915050565b6000670de0b6b3a76400006301dfe20083670de0b6b3a764000061140d919061206a565b6114179190612039565b670de0b6b3a764000061142a9190611fe3565b84611435919061206a565b61143f9190612039565b905092915050565b6114e3848484846040516024016114619493929190611e74565b6040516020818303038152906040527f08ee5666000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506117a6565b50505050565b6000808360010160008481526020019081526020016000205490506000811461166357600060018261151b91906120c4565b905060006001866000018054905061153391906120c4565b90508181146115ee57600086600001828154811061157a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050808760000184815481106115c4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480611628577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050611669565b60009150505b92915050565b60006116d1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166117cf9092919063ffffffff16565b905060008151111561173157808060200190518101906116f19190611ab6565b611730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161172790611f40565b60405180910390fd5b5b505050565b600061174283836117e7565b61179b5782600001829080600181540180825580915050600190039060005260206000200160009091909190915055826000018054905083600101600084815260200190815260200160002081905550600190506117a0565b600090505b92915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60606117de848460008561180a565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b60608247101561184f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161184690611ee0565b60405180910390fd5b6118588561191e565b611897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188e90611f20565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516118c09190611d8a565b60006040518083038185875af1925050503d80600081146118fd576040519150601f19603f3d011682016040523d82523d6000602084013e611902565b606091505b5091509150611912828286611931565b92505050949350505050565b600080823b905060008111915050919050565b6060831561194157829050611991565b6000835111156119545782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119889190611e52565b60405180910390fd5b9392505050565b60405180606001604052806000815260200160008152602001600060028111156119eb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525090565b60405180606001604052806000815260200160008152602001600081525090565b600081359050611a218161241a565b92915050565b600081519050611a3681612431565b92915050565b600081359050611a4b81612448565b92915050565b600060208284031215611a6357600080fd5b6000611a7184828501611a12565b91505092915050565b60008060408385031215611a8d57600080fd5b6000611a9b85828601611a12565b9250506020611aac85828601611a3c565b9150509250929050565b600060208284031215611ac857600080fd5b6000611ad684828501611a27565b91505092915050565b600060208284031215611af157600080fd5b6000611aff84828501611a3c565b91505092915050565b60008060408385031215611b1b57600080fd5b6000611b2985828601611a3c565b9250506020611b3a85828601611a3c565b9150509250929050565b600080600060608486031215611b5957600080fd5b6000611b6786828701611a3c565b9350506020611b7886828701611a3c565b9250506040611b8986828701611a3c565b9150509250925092565b611b9c816120f8565b82525050565b6000611bad82611fb1565b611bb78185611fc7565b9350611bc78185602086016121ad565b80840191505092915050565b611bdc81612153565b82525050565b611beb81612177565b82525050565b611bfa8161219b565b82525050565b6000611c0b82611fbc565b611c158185611fd2565b9350611c258185602086016121ad565b611c2e816122b6565b840191505092915050565b6000611c46602683611fd2565b9150611c51826122c7565b604082019050919050565b6000611c69602683611fd2565b9150611c7482612316565b604082019050919050565b6000611c8c602083611fd2565b9150611c9782612365565b602082019050919050565b6000611caf601d83611fd2565b9150611cba8261238e565b602082019050919050565b6000611cd2602a83611fd2565b9150611cdd826123b7565b604082019050919050565b606082016000820151611cfe6000850182611d6c565b506020820151611d116020850182611d6c565b506040820151611d246040850182611d6c565b50505050565b606082016000820151611d406000850182611d6c565b506020820151611d536020850182611d6c565b506040820151611d666040850182611bf1565b50505050565b611d7581612149565b82525050565b611d8481612149565b82525050565b6000611d968284611ba2565b915081905092915050565b6000602082019050611db66000830184611b93565b92915050565b6000606082019050611dd16000830186611b93565b611dde6020830185611b93565b611deb6040830184611d7b565b949350505050565b6000604082019050611e086000830185611b93565b611e156020830184611d7b565b9392505050565b6000602082019050611e316000830184611bd3565b92915050565b6000602082019050611e4c6000830184611be2565b92915050565b60006020820190508181036000830152611e6c8184611c00565b905092915050565b60006080820190508181036000830152611e8e8187611c00565b9050611e9d6020830186611d7b565b611eaa6040830185611d7b565b611eb76060830184611d7b565b95945050505050565b60006020820190508181036000830152611ed981611c39565b9050919050565b60006020820190508181036000830152611ef981611c5c565b9050919050565b60006020820190508181036000830152611f1981611c7f565b9050919050565b60006020820190508181036000830152611f3981611ca2565b9050919050565b60006020820190508181036000830152611f5981611cc5565b9050919050565b6000606082019050611f756000830184611ce8565b92915050565b6000606082019050611f906000830184611d2a565b92915050565b6000602082019050611fab6000830184611d7b565b92915050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611fee82612149565b9150611ff983612149565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561202e5761202d612229565b5b828201905092915050565b600061204482612149565b915061204f83612149565b92508261205f5761205e612258565b5b828204905092915050565b600061207582612149565b915061208083612149565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156120b9576120b8612229565b5b828202905092915050565b60006120cf82612149565b91506120da83612149565b9250828210156120ed576120ec612229565b5b828203905092915050565b600061210382612129565b9050919050565b60008115159050919050565b600081905061212482612406565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061215e82612165565b9050919050565b600061217082612129565b9050919050565b600061218282612189565b9050919050565b600061219482612129565b9050919050565b60006121a682612116565b9050919050565b60005b838110156121cb5780820151818401526020810190506121b0565b838111156121da576000848401525b50505050565b60006121eb82612149565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561221e5761221d612229565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6003811061241757612416612287565b5b50565b612423816120f8565b811461242e57600080fd5b50565b61243a8161210a565b811461244557600080fd5b50565b61245181612149565b811461245c57600080fd5b5056fe5470733a2025732c205374616b65643a2025732c20526577617264206d69737365643a202573a2646970667358221220595c759f10764cefa7d2a87eb501774a79b7b96cf3b47489391dc9796ae433c564736f6c63430008040033";

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