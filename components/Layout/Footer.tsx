import { Badge, HStack } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import config from '../../config/dapp'
import ColorModeSwitch from './ColorModeSwitch'

export default function Footer() {
  const { chainId } = useEthers()

  const network = config.networks?.find((n) => n.chainId === chainId)

  return (
    <HStack
      width="full"
      p={4}
      justifyContent="space-between"
      borderTopWidth={1}>
      <Badge>{network ? network.chainName : 'Not supported'}</Badge>
      <ColorModeSwitch />
    </HStack>
  )
}
