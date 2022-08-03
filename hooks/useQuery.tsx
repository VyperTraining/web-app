import { useMemo } from 'react'

import { useCalls } from '@usedapp/core'
import {
  ContractMethodNames,
  Params,
} from '@usedapp/core/dist/esm/src/model/types'
import { Contract, utils } from 'ethers'

import { ToDo, ToDo__factory, Token__factory, Token } from '../contracts'

const ToDoInterface = new utils.Interface(ToDo__factory.abi)

type ToDoMethodNames = ContractMethodNames<ToDo>
type ToDoParams = Params<ToDo, ToDoMethodNames>

type ToDoRequest = {
  contract: ToDo
  method: ToDoMethodNames
  args: ToDoParams
  returnType?: Awaited<ReturnType<ToDo['functions'][ToDoMethodNames]>>[0]
}

const TokenInterface = new utils.Interface(Token__factory.abi)

type TokenMethodNames = ContractMethodNames<Token>
type TokenParams = Params<Token, TokenMethodNames>

type TokenRequest = {
  contract: Token
  method: TokenMethodNames
  args: TokenParams
  returnType?: Awaited<ReturnType<Token['functions'][TokenMethodNames]>>[0]
}

export type Requests = Record<string, ToDoRequest | TokenRequest>

const CONTRACTS = {
  ToDo: new Contract(
    '0x053E254863d00a6532e35af7221CdEcBB808ab29',
    ToDoInterface,
  ) as ToDo,
  Token: new Contract(
    '0xd5a215CD386c00a14BdC1948342FbC9e19F1936C',
    TokenInterface,
  ) as Token,
}

export function ToDoCall<M extends ToDoMethodNames>(
  method: M,
  args: Parameters<ToDo['functions'][M]>,
) {
  return {
    contract: CONTRACTS['ToDo'],
    method,
    args,
    returnType: undefined as
      | Awaited<ReturnType<ToDo['functions'][M]>>[0]
      | undefined,
  }
}

export function TokenCall<M extends TokenMethodNames>(
  method: M,
  args: Parameters<Token['functions'][M]>,
) {
  return {
    contract: CONTRACTS['Token'],
    method,
    args,
    returnType: undefined as
      | Awaited<ReturnType<Token['functions'][M]>>[0]
      | undefined,
  }
}

export const call = {
  ToDo: ToDoCall,
  Token: TokenCall,
}

export default function useQuery<T extends Requests>(
  requests: T,
): {
  data: { [K in keyof T]: NonNullable<T[K]['returnType']> }
  isLoading: boolean
  error: Error | undefined
} {
  const callKeys = Object.keys(requests) as (keyof T)[]
  const calls = callKeys.map((c) => requests[c])
  const result = useCalls(calls)

  const error = result.find((r) => r?.error)?.error
  const loadedValues = result.filter((result) => result?.value)
  const isLoading = loadedValues.length !== calls.length

  const data = useMemo(() => {
    const requestWithData = {} as {
      [K in keyof T]: NonNullable<T[K]['returnType']>
    }
    callKeys.forEach((k, index) => {
      requestWithData[k] = result[index]?.value?.[0]
    })
    return requestWithData
  }, [result, callKeys])

  return { data, isLoading, error }
}

export type DataType<T extends Requests> = {
  [K in keyof T]: T[K]['returnType']
}

export function QueryContainer<T extends Requests>(props: {
  children: (data: {
    [K in keyof T]: NonNullable<T[K]['returnType']>
  }) => Children
  query: T
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
