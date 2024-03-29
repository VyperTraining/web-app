/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ToDo, ToDoInterface } from "../ToDo";

const _abi = [
  {
    type: "constructor",
    stateMutability: "nonpayable",
    inputs: [],
  },
  {
    type: "function",
    name: "createTask",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_status",
        type: "uint8",
      },
      {
        name: "_description",
        type: "string",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "updateStatus",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_status",
        type: "uint8",
      },
      {
        name: "_taskId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "updateDescription",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_description",
        type: "string",
      },
      {
        name: "_taskId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "updateTask",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_status",
        type: "uint8",
      },
      {
        name: "_description",
        type: "string",
      },
      {
        name: "_taskId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "doNothing",
    stateMutability: "pure",
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    name: "statusName",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "uint8",
      },
    ],
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
  },
  {
    type: "function",
    name: "statusCode",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
  },
  {
    type: "function",
    name: "totalTasks",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "idToTask",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        components: [
          {
            name: "status",
            type: "uint8",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "owner",
            type: "address",
          },
          {
            name: "taskId",
            type: "uint256",
          },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "totalUserTasks",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
  {
    type: "function",
    name: "userTaskAt",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
];

export class ToDo__factory {
  static readonly abi = _abi;
  static createInterface(): ToDoInterface {
    return new utils.Interface(_abi) as ToDoInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ToDo {
    return new Contract(address, _abi, signerOrProvider) as ToDo;
  }
}
