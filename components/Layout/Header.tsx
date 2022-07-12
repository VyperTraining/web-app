import { Heading, HStack, useColorModeValue } from '@chakra-ui/react'

import ConnectButton from '../Account/ConnectButton'
import UserMenu from '../Account/UserMenu'

export default function Header() {
  const backgroundColor = useColorModeValue('purple.200', 'purple.600')

  return (
    <HStack
      justifyContent="space-between"
      width="full"
      backgroundColor={backgroundColor}
      padding={4}
      height={20}>
      <Heading size="lg">ToDo Web3</Heading>
      <UserMenu />
      <ConnectButton />
    </HStack>
  )
}
