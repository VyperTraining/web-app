import { useEffect } from 'react'

import {
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'
import { BsPlusLg } from 'react-icons/bs'

import { useToDoFunction } from '../../contracts/hooks/useToDo'
import Task from './Task'
import TaskModal from './TaskModal'

type Props = {
  tasks: TaskType[]
  title: string
  status: number
}

export default function List(props: Props) {
  const { account } = useEthers()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const transaction = useToDoFunction('createTask')

  const isLoading =
    ['PendingSignature', 'Mining'].includes(transaction.state.status) ||
    !!transaction.state.transaction

  const addTask = (value: string) => {
    transaction.send(props.status, value)
  }

  useEffect(() => {
    if (!isLoading || !account) {
      onClose()
    }
  }, [isLoading, account])

  return (
    <>
      <VStack
        borderWidth={1}
        borderRadius={8}
        p={4}
        spacing={4}
        height="full"
        flex={1}>
        <HStack
          borderBottomWidth={1}
          width="full"
          pb={4}
          justifyContent="space-between">
          <Heading>{props.title}</Heading>
          {account ? (
            <IconButton
              aria-label="Add new Task"
              icon={<BsPlusLg />}
              onClick={onOpen}
            />
          ) : null}
        </HStack>
        <VStack width="full" flex={1} overflowY="auto" spacing={4}>
          {props.tasks.map((task) => (
            <Task key={task.taskId} task={task} />
          ))}
        </VStack>
      </VStack>
      <TaskModal
        isLoading={isLoading}
        title="Add new Task"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={addTask}
      />
    </>
  )
}
