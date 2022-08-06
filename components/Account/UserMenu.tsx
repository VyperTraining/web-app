import {
  Badge,
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import AccountIcon from './AccountIcon'
import AccountName from './AccountName'

export default function UserMenu() {
  const { account, deactivate } = useEthers()

  if (!account) {
    return null
  }

  return (
    <Menu direction="rtl">
      <MenuButton as={Box} cursor="pointer">
        <HStack>
          <Badge>
            <AccountName address={account} />
          </Badge>
          <AccountIcon address={account} />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => deactivate()}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  )
}
