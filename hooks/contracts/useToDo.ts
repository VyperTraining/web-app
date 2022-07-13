import {
  CallResult,
  useCall,
  useCalls,
  useContractFunction,
} from '@usedapp/core'
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

type ToDoMethodNames = ContractMethodNames<ToDo>
type ToDoParams = Params<ToDo, ToDoMethodNames>
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

export type ToDoCallsArray = { method: ToDoMethodNames; args: ToDoParams }[]
export function useToDoCalls(calls: ToDoCallsArray) {
  const callsMap = calls.map((c) => ({ ...c, contract: ContractInstance }))
  const result = useCalls(callsMap)

  return result as CallResult<ToDo, ToDoMethodNames>[]
}

type ToDoFunctions = ContractFunctionNames<ToDo>
export function useToDoFunction(name: ToDoFunctions) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })
  return transaction
}
