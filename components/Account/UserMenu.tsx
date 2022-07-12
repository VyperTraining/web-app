import { Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

import truncateAddress from '../../utils/truncateAddress'

export default function UserMenu() {
  const { account, deactivate } = useEthers()

  if (!account) {
    return null
  }

  return (
    <Menu direction="rtl">
      <MenuButton as={Box} cursor="pointer">
        {truncateAddress(account)}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => deactivate()}>Disconnect</MenuItem>
      </MenuList>
    </Menu>
  )
}
