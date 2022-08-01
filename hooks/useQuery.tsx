import { useMemo } from 'react'

import { useCalls } from '@usedapp/core'
import {
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { ToDo, ToDo__factory } from '../contracts'

const Interface = new utils.Interface(ToDo__factory.abi)

type ToDoMethodNames = ContractMethodNames<ToDo>
type ToDoParams = Params<ToDo, ToDoMethodNames>

type ToDoRequests<T> = {
  [K in keyof T]: {
    contract: ToDo
    method: ToDoMethodNames
    args: ToDoParams
  }
}

export type Requests<T> = ToDoRequests<T>

const CONTRACTS = {
  ToDo: new Contract(
    '0x053E254863d00a6532e35af7221CdEcBB808ab29',
    Interface,
  ) as ToDo,
}

export function ToDoCall<M extends ToDoMethodNames>(
  method: M,
  args: Parameters<ToDo['functions'][M]>,
) {
  return {
    contract: CONTRACTS['ToDo'],
    method,
    args,
  }
}

export const call = {
  ToDo: ToDoCall,
}

export default function useQuery<T>(requests: Requests<T>) {
  const callKeys = Object.keys(requests) as (keyof T)[]
  const calls = callKeys.map((c) => requests[c])
  const result = useCalls(calls)

  const error = result.find((r) => r?.error)?.error
  const loadedValues = result.filter((result) => result?.value)
  const isLoading = loadedValues.length !== calls.length

  const data = useMemo(() => {
    return result.reduce(
      (accumulator, item, index) => {
        accumulator[callKeys[index]] = item?.value?.[0]
        return accumulator
      },
      {} as {
        [K in keyof Requests<T>]:
          | Awaited<
              ReturnType<
                Requests<T>[K]['contract']['functions'][Requests<T>[K]['method']]
              >
            >[0]
          | undefined
      },
    )
  }, [result, callKeys])

  return { data, isLoading, error }
}

// export function TestComponent() {
//   const requests = {
//     theTasks: call.ToDo('userTaskAt', ['0x0', 1]),
//     totalUserTasks1: call.ToDo('totalUserTasks', ['0x1']),
//     OPEN: call.ToDo('statusCode', ['OPEN']),
//     IN_PROGRESS: call.ToDo('statusCode', ['IN_PROGRESS']),
//     DONE: call.ToDo('statusCode', ['DONE']),
//   }
//   const result = useQuery(requests)

//   const totalUserTasks = result.data.theTasks

//   return null
// }

export function QueryContainer<T>(props: {
  children: (data: {
    [K in keyof Requests<T>]:
      | Awaited<
          ReturnType<
            Requests<T>[K]['contract']['functions'][Requests<T>[K]['method']]
          >
        >[0]
      | undefined
  }) => Children
  query: Requests<T>
}) {
  const { query, children } = props
  const { data, error, isLoading } = useQuery(query)

  if (error) {
    return <>{error.message}</>
  }

  if (isLoading) {
    return <>Loading ...</>
  }

  return children(data)
}
