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
// type ReturnTypes =
//   | Awaited<ReturnType<ToDo['functions'][ToDoMethodNames]>>
//   | undefined

export function useToDoCall<M extends ToDoMethodNames>(
  method: M,
  args: Parameters<ToDo['functions'][M]>,
) {
  const { value, error } = (useCall({
    contract: ContractInstance,
    method,
    args,
  }) as CallResult<ToDo, M>) ?? {
    value: undefined,
    error: undefined,
  }

  return [value?.[0], error, !value] as [
    Awaited<ReturnType<ToDo['functions'][M]>>[0] | undefined,
    Error | undefined,
    boolean,
  ]
}

export type ToDoCallsArray = { method: ToDoMethodNames; args: ToDoParams }[]

export function useToDoCalls(calls: ToDoCallsArray) {
  const callsMap = calls.map((c) => ({ ...c, contract: ContractInstance }))
  const result = useCalls(callsMap) as CallResult<ToDo, ToDoMethodNames>[]

  const firstError = result.find((r) => r?.error)
  const loadedValues = result.filter((result) => result?.value)
  const isLoading = loadedValues.length !== calls.length
  const values = loadedValues.map((result) => result?.value?.[0])

  return [values, firstError, isLoading] as [
    typeof values,
    Error | undefined,
    boolean,
  ]
}

type ToDoFunctions = ContractFunctionNames<ToDo>
export function useToDoFunction(name: ToDoFunctions) {
  const transaction = useContractFunction(ContractInstance, name, {
    transactionName: name,
  })
  return transaction
}
