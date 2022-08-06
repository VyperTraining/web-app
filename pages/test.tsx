import { Text, VStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { formatEther } from 'ethers/lib/utils'

import { call, QueryContainer, QueryData } from '../contracts'

const QueryFunction = (account: string) => ({
  bestUserTasksCount: call.ToDo('totalUserTasks', [account]),
  totalTasks: call.ToDo('totalTasks', []),
  openId: call.ToDo('statusCode', ['OPEN']),
  inProgressId: call.ToDo('statusCode', ['IN_PROGRESS']),
  doneId: call.ToDo('statusCode', ['COMPLETE']),
  tokenTotal: call.Token('totalSupply', []),
  tokenName: call.Token('name', []),
  tokenSymbol: call.Token('symbol', []),
  balanceOf: call.Token('balanceOf', [account]),
})

type Props = {
  data: QueryData<ReturnType<typeof QueryFunction>>
}

function TestPageUI(props: Props) {
  return (
    <VStack>
      <Text>Best User Count: {props.data.bestUserTasksCount.toString()}</Text>
      <Text>Total Tasks: {props.data.totalTasks.toString()}</Text>
      <Text>OPEN ID: {props.data.openId}</Text>
      <Text>IN_PROGRESS ID: {props.data.inProgressId}</Text>
      <Text>DONE ID: {props.data.doneId}</Text>
      <Text>Token Total Supply: {formatEther(props.data.tokenTotal)}</Text>
      <Text>Token Symbol: {props.data.tokenSymbol}</Text>
      <Text>Token Name: {props.data.tokenName}</Text>
      <Text>Balance: {formatEther(props.data.balanceOf)}</Text>
    </VStack>
  )
}

export function TestPageQueryContainer({ account }: { account: string }) {
  const query = QueryFunction(account)
  return <QueryContainer query={query} component={TestPageUI} />
}

export default function TestPage() {
  const { account } = useEthers()
  if (account) {
    return <TestPageQueryContainer account={account} />
  }

  return null
}
