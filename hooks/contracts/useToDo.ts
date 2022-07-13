import { CallResult, useCall, useContractFunction } from '@usedapp/core'
import {
  ContractFunctionNames,
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { ToDo, ToDo__factory } from '../../contracts'

const Interface = new utils.Interface(ToDo__factory.abi)
const ContractInstance = new Contract(
  '0x053E254863d00a6532e35af7221CdEcBB808ab29',
  Interface,
) as ToDo

export type ToDoFunctions = ContractFunctionNames<ToDo>
export function useToDoFunction(name: ToDoFunctions) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })

  return transaction
}

export type ToDoMethodNames = ContractMethodNames<ToDo>
export type ToDoParams = Params<ToDo, ToDoMethodNames>
export function useToDoCall(method: ToDoMethodNames, args: ToDoParams = []) {
  return (
    (useCall({
      contract: ContractInstance,
      method,
      args,
    }) as CallResult<ToDo, typeof method>) ?? {
      value: undefined,
      error: undefined,
    }
  )
}
