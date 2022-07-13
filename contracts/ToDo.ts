/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface ToDoInterface extends utils.Interface {
  functions: {
    "createTask(uint8,string)": FunctionFragment;
    "updateStatus(uint8,uint256)": FunctionFragment;
    "updateDescription(string,uint256)": FunctionFragment;
    "updateTask(uint8,string,uint256)": FunctionFragment;
    "statusName(uint8)": FunctionFragment;
    "statusCode(string)": FunctionFragment;
    "totalTasks()": FunctionFragment;
    "idToTask(uint256)": FunctionFragment;
    "totalUserTasks(address)": FunctionFragment;
    "userTaskAt(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createTask"
      | "updateStatus"
      | "updateDescription"
      | "updateTask"
      | "statusName"
      | "statusCode"
      | "totalTasks"
      | "idToTask"
      | "totalUserTasks"
      | "userTaskAt"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createTask",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStatus",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDescription",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTask",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "statusName",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "statusCode",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalTasks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "idToTask",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalUserTasks",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userTaskAt",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updateTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "statusName", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "statusCode", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalTasks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "idToTask", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalUserTasks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userTaskAt", data: BytesLike): Result;

  events: {};
}

export interface ToDo extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ToDoInterface;

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
    createTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStatus(
      _status: PromiseOrValue<BigNumberish>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateDescription(
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    statusName(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    statusCode(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    totalTasks(overrides?: CallOverrides): Promise<[BigNumber]>;

    idToTask(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        [number, string, string, BigNumber] & {
          status: number;
          description: string;
          owner: string;
          taskId: BigNumber;
        }
      ]
    >;

    totalUserTasks(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userTaskAt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  createTask(
    _status: PromiseOrValue<BigNumberish>,
    _description: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStatus(
    _status: PromiseOrValue<BigNumberish>,
    _taskId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateDescription(
    _description: PromiseOrValue<string>,
    _taskId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateTask(
    _status: PromiseOrValue<BigNumberish>,
    _description: PromiseOrValue<string>,
    _taskId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  statusName(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  statusCode(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<number>;

  totalTasks(overrides?: CallOverrides): Promise<BigNumber>;

  idToTask(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, string, string, BigNumber] & {
      status: number;
      description: string;
      owner: string;
      taskId: BigNumber;
    }
  >;

  totalUserTasks(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userTaskAt(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    createTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStatus(
      _status: PromiseOrValue<BigNumberish>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDescription(
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    statusName(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    statusCode(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<number>;

    totalTasks(overrides?: CallOverrides): Promise<BigNumber>;

    idToTask(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, string, string, BigNumber] & {
        status: number;
        description: string;
        owner: string;
        taskId: BigNumber;
      }
    >;

    totalUserTasks(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTaskAt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    createTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStatus(
      _status: PromiseOrValue<BigNumberish>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateDescription(
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    statusName(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    statusCode(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalTasks(overrides?: CallOverrides): Promise<BigNumber>;

    idToTask(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalUserTasks(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTaskAt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStatus(
      _status: PromiseOrValue<BigNumberish>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateDescription(
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateTask(
      _status: PromiseOrValue<BigNumberish>,
      _description: PromiseOrValue<string>,
      _taskId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    statusName(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    statusCode(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTasks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    idToTask(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalUserTasks(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userTaskAt(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}