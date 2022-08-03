import { Text, VStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { BigNumber } from 'ethers'

import { call, QueryContainer } from '../hooks/useQuery'

type Props = {
  bestUserTasksCount: BigNumber
  totalTasks: BigNumber
  openId: number
  inProgressId: number
  doneId: number
  tokenTotal: BigNumber
  tokenName: string
  tokenSymbol: string
}

function ToDoUI(props: Props) {
  return (
    <VStack>
      <Text>Best User Count: {props.bestUserTasksCount.toString()}</Text>
      <Text>Total Tasks: {props.totalTasks.toString()}</Text>
      <Text>OPEN ID: {props.openId}</Text>
      <Text>IN_PROGRESS ID: {props.inProgressId}</Text>
      <Text>DONE ID: {props.doneId}</Text>
      <Text>Token Total Supply: {props.tokenTotal.toString()}</Text>
      <Text>Token Symbol: {props.tokenSymbol}</Text>
      <Text>Token Name: {props.tokenName}</Text>
    </VStack>
  )
}

export function ToDoUIQueryContainer({ account }: { account: string }) {
  const query = {
    diogoTasksCount: call.ToDo('totalUserTasks', [account]),
    totalTasks: call.ToDo('totalTasks', []),
    openId: call.ToDo('statusCode', ['OPEN']),
    inProgressId: call.ToDo('statusCode', ['IN_PROGRESS']),
    doneId: call.ToDo('statusCode', ['COMPLETE']),
    tokenSupply: call.Token('totalSupply', []),
    tokenName: call.Token('name', []),
    tokenSymbol: call.Token('symbol', []),
  }

  return (
    <QueryContainer query={query}>
      {(data) => (
        <ToDoUI
          totalTasks={data.diogoTasksCount}
          openId={data.openId}
          inProgressId={data.inProgressId}
          doneId={data.doneId}
          bestUserTasksCount={data.diogoTasksCount}
          tokenTotal={data.tokenSupply}
          tokenName={data.tokenName}
          tokenSymbol={data.tokenSymbol}
        />
      )}
    </QueryContainer>
  )
}

export default function Root() {
  const { account } = useEthers()
  if (account) {
    return <ToDoUIQueryContainer account={account} />
  }

  return null
}
