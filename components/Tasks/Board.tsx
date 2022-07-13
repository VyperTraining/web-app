import { useMemo } from 'react'

import { Box, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import {
  ToDoCallsArray,
  useToDoCall,
  useToDoCalls,
} from '../../hooks/contracts/useToDo'

function BoardTasks(props: { taskIds: number[] }) {
  const calls = useMemo(() => {
    return props.taskIds.map((key) => ({
      method: 'idToTask',
      args: [key],
    })) as ToDoCallsArray
  }, [props.taskIds])

  const callResults = useToDoCalls(calls)

  const firstResultWithError = callResults.find((r) => r?.error)
  if (firstResultWithError) {
    return <>Something went wrong {firstResultWithError.error?.message}</>
  }

  const loadedTasks = callResults
    .filter((result) => result?.value?.[0])
    .map((result) => {
      const value = result?.value?.[0]
      const [status, description, owner, taskId] = value as [
        number,
        string,
        string,
        BigNumber,
      ]
      return { status, description, owner, taskId } as TaskType
    })

  const isLoading = loadedTasks.length !== calls.length
  if (isLoading) {
    return <Skeleton height="full" />
  }

  return <Box height="full">{loadedTasks.length}</Box>
}

export default function Board() {
  const { value: totalTasksValue, error: totalTasksError } =
    useToDoCall('totalTasks')

  if (totalTasksError) {
    return <>Something went wrong {totalTasksError.message}</>
  }

  if (!totalTasksValue) {
    return <Skeleton height="full" />
  }

  const totalTasks = (totalTasksValue[0] as BigNumber).toNumber()
  const taskIds = Array.from(Array(totalTasks).keys()).map((i) => i + 1)

  return <BoardTasks taskIds={taskIds} />
}
