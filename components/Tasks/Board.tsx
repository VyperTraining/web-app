import { useMemo } from 'react'

import { HStack, Skeleton } from '@chakra-ui/react'
import { BigNumber } from 'ethers'

import useQuery, { call } from '../../contracts'
import { Requests } from '../../contracts/requests'
import List from './List'

export default function Board(props: { taskIds: number[] }) {
  const calls = useMemo(() => {
    const query = {} as Requests

    props.taskIds.forEach((key) => {
      query[key] = call.ToDo('idToTask', [key])
    })
    return query
  }, [props.taskIds])

  const { data, error, isLoading } = useQuery(calls)

  if (error) {
    return <>Something went wrong {error?.message}</>
  }

  if (isLoading) {
    return <Skeleton height="full" />
  }

  const tasks = Object.keys(data).map((k) => {
    const [status, description, owner, taskId] = data[k] as [
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
