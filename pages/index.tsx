import { useEthers } from '@usedapp/core'

import GlobalBoard from '../components/Tasks/GlobalBoard'
import UserBoard from '../components/Tasks/UserBoard'

export default function Index() {
  const { account } = useEthers()
  if (account) {
    return <UserBoard account={account} />
  }
  return <GlobalBoard />
}
