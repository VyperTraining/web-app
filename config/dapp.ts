import { Ropsten } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config = {
  autoConnect: true,
  readOnlyChainId: Ropsten.chainId,
  readOnlyUrls: {
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
  },
  networks: [Ropsten],
}

export default config
