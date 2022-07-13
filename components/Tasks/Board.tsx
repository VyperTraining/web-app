import { Skeleton } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { BigNumber } from 'ethers'

import { useToDoCall } from '../../hooks/contracts/useToDo'

function BoardTotalTasks({ account }: { account: string }) {
  const { value, error } = useToDoCall('totalUserTasks', [account])

  if (error) {
    return null
  }

  if (!value) {
    return <Skeleton height="full" />
  }

  const total = value[0] as BigNumber

  return <>{total.toString()}</>
}

export default function Board() {
  const { account } = useEthers()

  if (!account) {
    return null
  }

  return <BoardTotalTasks account={account} />
}
