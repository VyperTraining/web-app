/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NFT, NFTInterface } from "../NFT";

const _abi = [
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "sender",
        type: "address",
        indexed: true,
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        type: "uint256",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ApprovalForAll",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        type: "bool",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    name: "transferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "safeTransferFrom",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_approved",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setApprovalForAll",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_operator",
        type: "address",
      },
      {
        name: "_approved",
        type: "bool",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "mint",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "ownerOf",
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
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "balanceOf",
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
    name: "getApproved",
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
        type: "address",
      },
    ],
  },
  {
    type: "function",
    name: "isApprovedForAll",
    stateMutability: "view",
    inputs: [
      {
        name: "arg0",
        type: "address",
      },
      {
        name: "arg1",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
  },
];

export class NFT__factory {
  static readonly abi = _abi;
  static createInterface(): NFTInterface {
    return new utils.Interface(_abi) as NFTInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT {
    return new Contract(address, _abi, signerOrProvider) as NFT;
  }
}
