import { useMemo } from 'react'

import { Box, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import useQuery, { call } from '../../contracts'
import { useToDoCall } from '../../contracts/hooks/useToDo'
import { Requests } from '../../contracts/requests'
import Board from './Board'

type Props = {
  account: string
}

function UserBoardTasks(props: Props & { total: BigNumber }) {
  const calls = useMemo(() => {
    const taskIndexes = Array.from(Array(props.total.toNumber()).keys())

    const query = {} as Requests
    taskIndexes.forEach((key) => {
      query[key] = call.ToDo('userTaskAt', [props.account, key])
    })
    return query
  }, [props.total, props.account])

  const { data, error, isLoading } = useQuery(calls)

  if (error) {
    return <Box>Something went wrong {error.message}</Box>
  }

  if (isLoading) {
    return <Skeleton height="full" />
  }

  const taskIds = Object.keys(data).map((v) =>
    (data[v] as BigNumber).toNumber(),
  )

  return <Board taskIds={taskIds} />
}

export default function UserBoard(props: Props) {
  const [totalTasksValue, totalTasksError, isLoading] = useToDoCall(
    'totalUserTasks',
    [props.account],
  )

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
