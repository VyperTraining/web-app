import { Button } from '@chakra-ui/react'
import { useEthers } from '@usedapp/core'

export default function ConnectButton() {
  const { chainId, account, activateBrowserWallet } = useEthers()

  if (!chainId || account) {
    return null
  }

  return <Button onClick={() => activateBrowserWallet()}>Connect</Button>
}
