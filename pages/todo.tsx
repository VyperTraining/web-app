import { Text, VStack } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import { call, QueryContainer } from '../hooks/useQuery'

type Props = {
  totalTasks: BigNumber
  openId: number
  inProgressId: number
  doneId: number
}

function ToDoUI(props: Props) {
  return (
    <VStack>
      <Text>Total Tasks: {props.totalTasks.toString()}</Text>
      <Text>OPEN ID: {props.openId}</Text>
      <Text>IN_PROGRESS ID: {props.inProgressId}</Text>
      <Text>DONE ID: {props.doneId}</Text>
    </VStack>
  )
}

export default function ToDoUIQueryContainer() {
  return (
    <QueryContainer
      query={{
        totalTasks: call.ToDo('totalTasks', []),
        openId: call.ToDo('statusCode', ['OPEN']),
        inProgressId: call.ToDo('statusCode', ['IN_PROGRESS']),
        doneId: call.ToDo('statusCode', ['DONE']),
      }}>
      {(data) => (
        <ToDoUI
          totalTasks={data.totalTasks as BigNumber}
          openId={data.openId as number}
          inProgressId={data.inProgressId as number}
          doneId={data.doneId as number}
        />
      )}
    </QueryContainer>
  )
}
