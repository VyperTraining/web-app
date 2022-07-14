import { Box, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import { useToDoCall } from '../../hooks/contracts/useToDo'
import Board from './Board'

export default function GlobalBoard() {
  const [totalTasksValue, totalTasksError, isLoading] =
    useToDoCall<BigNumber>('totalTasks')

  if (totalTasksError) {
    return <Box>Something went wrong {totalTasksError.message}</Box>
  }

  if (isLoading || !totalTasksValue) {
    return <Skeleton height="full" />
  }
  const totalTasks = totalTasksValue.toNumber()
  const taskIds = Array.from(Array(totalTasks).keys()).map((i) => i + 1)

  return <Board taskIds={taskIds} />
}
