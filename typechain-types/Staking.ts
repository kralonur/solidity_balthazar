/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Staking {
  export type StakeHolderStruct = {
    staked: BigNumberish;
    stakedWithWeight: BigNumberish;
    availableReward: BigNumberish;
    rewardMissed: BigNumberish;
  };

  export type StakeHolderStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    staked: BigNumber;
    stakedWithWeight: BigNumber;
    availableReward: BigNumber;
    rewardMissed: BigNumber;
  };

  export type StakeInfoStruct = {
    amount: BigNumberish;
    stakeTime: BigNumberish;
    unstakeTime: BigNumberish;
    status: BigNumberish;
  };

  export type StakeInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    number
  ] & {
    amount: BigNumber;
    stakeTime: BigNumber;
    unstakeTime: BigNumber;
    status: number;
  };
}

export interface StakingInterface extends utils.Interface {
  contractName: "Staking";
  functions: {
    "MAX_LOCK_DURATION()": FunctionFragment;
    "MIN_LOCK_DURATION()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "calculateAvailableRewards(address)": FunctionFragment;
    "calculateTps(uint256)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "duration()": FunctionFragment;
    "getStakeHolder(address)": FunctionFragment;
    "getStakeInfo(address,uint256)": FunctionFragment;
    "lastUpdateTime()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "reward()": FunctionFragment;
    "rewardProduced()": FunctionFragment;
    "setParameters(uint256,uint256,uint256)": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakeId()": FunctionFragment;
    "tokenClaimPeriod()": FunctionFragment;
    "tokenMain()": FunctionFragment;
    "tokenReward()": FunctionFragment;
    "tokenStake()": FunctionFragment;
    "totalStaked()": FunctionFragment;
    "totalStakedWithWeight()": FunctionFragment;
    "tps()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "updateValues()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_LOCK_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_LOCK_DURATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateAvailableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTps",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getStakeHolder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeInfo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastUpdateTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "reward", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardProduced",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setParameters",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stakeId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenClaimPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tokenMain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStaked",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalStakedWithWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tps", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateValues",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_LOCK_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_LOCK_DURATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateAvailableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getStakeHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastUpdateTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reward", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardProduced",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenClaimPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenMain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalStaked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalStakedWithWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateValues",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Staking extends BaseContract {
  contractName: "Staking";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StakingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MAX_LOCK_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_LOCK_DURATION(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateTps(
      passedTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<[Staking.StakeHolderStructOutput]>;

    getStakeInfo(
      stakeHolder: string,
      _stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Staking.StakeInfoStructOutput]>;

    lastUpdateTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reward(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardProduced(overrides?: CallOverrides): Promise<[BigNumber]>;

    setParameters(
      _reward: BigNumberish,
      _tokenClaimPeriod: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeId(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenClaimPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenMain(overrides?: CallOverrides): Promise<[string]>;

    tokenReward(overrides?: CallOverrides): Promise<[string]>;

    tokenStake(overrides?: CallOverrides): Promise<[string]>;

    totalStaked(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalStakedWithWeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    tps(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  MAX_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  calculateAvailableRewards(
    stakeHolderAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateTps(
    passedTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  getStakeHolder(
    stakeHolderAddress: string,
    overrides?: CallOverrides
  ): Promise<Staking.StakeHolderStructOutput>;

  getStakeInfo(
    stakeHolder: string,
    _stakeId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Staking.StakeInfoStructOutput>;

  lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reward(overrides?: CallOverrides): Promise<BigNumber>;

  rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

  setParameters(
    _reward: BigNumberish,
    _tokenClaimPeriod: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    amount: BigNumberish,
    _lockDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeId(overrides?: CallOverrides): Promise<BigNumber>;

  tokenClaimPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  tokenMain(overrides?: CallOverrides): Promise<string>;

  tokenReward(overrides?: CallOverrides): Promise<string>;

  tokenStake(overrides?: CallOverrides): Promise<string>;

  totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

  totalStakedWithWeight(overrides?: CallOverrides): Promise<BigNumber>;

  tps(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _stakeId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateValues(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MAX_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTps(
      passedTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(overrides?: CallOverrides): Promise<void>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<Staking.StakeHolderStructOutput>;

    getStakeInfo(
      stakeHolder: string,
      _stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Staking.StakeInfoStructOutput>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    reward(overrides?: CallOverrides): Promise<BigNumber>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    setParameters(
      _reward: BigNumberish,
      _tokenClaimPeriod: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenClaimPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    tokenMain(overrides?: CallOverrides): Promise<string>;

    tokenReward(overrides?: CallOverrides): Promise<string>;

    tokenStake(overrides?: CallOverrides): Promise<string>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedWithWeight(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(_stakeId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updateValues(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MAX_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LOCK_DURATION(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTps(
      passedTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeInfo(
      stakeHolder: string,
      _stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastUpdateTime(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reward(overrides?: CallOverrides): Promise<BigNumber>;

    rewardProduced(overrides?: CallOverrides): Promise<BigNumber>;

    setParameters(
      _reward: BigNumberish,
      _tokenClaimPeriod: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeId(overrides?: CallOverrides): Promise<BigNumber>;

    tokenClaimPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    tokenMain(overrides?: CallOverrides): Promise<BigNumber>;

    tokenReward(overrides?: CallOverrides): Promise<BigNumber>;

    tokenStake(overrides?: CallOverrides): Promise<BigNumber>;

    totalStaked(overrides?: CallOverrides): Promise<BigNumber>;

    totalStakedWithWeight(overrides?: CallOverrides): Promise<BigNumber>;

    tps(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_LOCK_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_LOCK_DURATION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateAvailableRewards(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTps(
      passedTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStakeHolder(
      stakeHolderAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeInfo(
      stakeHolder: string,
      _stakeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastUpdateTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardProduced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setParameters(
      _reward: BigNumberish,
      _tokenClaimPeriod: BigNumberish,
      _duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      amount: BigNumberish,
      _lockDuration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenClaimPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenMain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenStake(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStaked(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalStakedWithWeight(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tps(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _stakeId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateValues(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
