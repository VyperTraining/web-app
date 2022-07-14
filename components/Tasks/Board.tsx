import { useMemo } from 'react'

import { HStack, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import { ToDoCallsArray, useToDoCalls } from '../../hooks/contracts/useToDo'
import List from './List'

export default function Board(props: { taskIds: number[] }) {
  const calls = useMemo(() => {
    return props.taskIds.map((key) => ({
      method: 'idToTask',
      args: [key],
    })) as ToDoCallsArray
  }, [props.taskIds])

  const [values, error, isLoading] = useToDoCalls(calls)

  if (error) {
    return <>Something went wrong {error?.message}</>
  }

  if (isLoading) {
    return <Skeleton height="full" />
  }

  const tasks = values.map((value) => {
    const [status, description, owner, taskId] = value as [
      number,
      string,
      string,
      BigNumber,
    ]
    return { status, description, owner, taskId } as TaskType
  })

  return (
    <HStack width="full" height="full" spacing={4} p={4}>
      <List
        tasks={tasks.filter((t) => t.status === 0)}
        title="Open"
        status={0}
      />
      <List
        tasks={tasks.filter((t) => t.status === 1)}
        title="In Progress"
        status={1}
      />
      <List
        tasks={tasks.filter((t) => t.status === 2)}
        title="Done"
        status={2}
      />
    </HStack>
  )
}
