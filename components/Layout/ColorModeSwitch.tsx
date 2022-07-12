import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ColorModeSwitch() {
  const { toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size="md"
      icon={<SwitchIcon />}
      aria-label="Switch color mode"
      onClick={toggleColorMode}
      variant="ghost"
    />
  )
}
