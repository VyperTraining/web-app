import { useMemo } from 'react'

import { Box, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import {
  ToDoCallsArray,
  useToDoCall,
  useToDoCalls,
} from '../../hooks/contracts/useToDo'
import Board from './Board'

type Props = {
  account: string
}

function UserBoardTasks(props: Props & { total: BigNumber }) {
  const calls = useMemo(() => {
    const taskIndexes = Array.from(Array(props.total.toNumber()).keys())

    return taskIndexes.map((key) => ({
      method: 'userTaskAt',
      args: [props.account, key],
    })) as ToDoCallsArray
  }, [props.total, props.account])

  const [values, error, isLoading] = useToDoCalls(calls)

  if (error) {
    return <Box>Something went wrong {error.message}</Box>
  }

  if (isLoading) {
    return <Skeleton height="full" />
  }

  const taskIds = values.map((v) => (v as BigNumber).toNumber())

  return <Board taskIds={taskIds} />
}

export default function UserBoard(props: Props) {
  const [totalTasksValue, totalTasksError, isLoading] = useToDoCall(
    'totalUserTasks',
    [props.account],
  )

  const [value, error, loading] = useToDoCall('statusName', [1])

  if (totalTasksError) {
    return <Box>Something went wrong {totalTasksError.message}</Box>
  }

  if (isLoading || !totalTasksValue) {
    return <Skeleton height="full" />
  }

  if (totalTasksValue.eq(0)) {
    return <Board taskIds={[]} />
  }

  return <UserBoardTasks account={props.account} total={totalTasksValue} />
}
