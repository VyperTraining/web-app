import { Badge, HStack, Text, VStack } from '@chakra-ui/react'

import AccountIcon from '../Account/AccountIcon'
import AccountName from '../Account/AccountName'

type Props = { task: TaskType }

export default function Task(props: Props) {
  return (
    <VStack
      borderWidth={1}
      borderRadius={8}
      p={4}
      spacing={4}
      width="full"
      maxW="100%">
      <HStack borderBottomWidth={1} pb={4} width="full">
        <AccountIcon address={props.task.owner} size={16} border={0} />
        <Badge size="sm">
          <AccountName address={props.task.owner} />
        </Badge>
      </HStack>
      <Text width="full">{props.task.description}</Text>
    </VStack>
  )
}
