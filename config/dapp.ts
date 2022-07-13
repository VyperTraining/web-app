import { Config, Mainnet, Ropsten } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

const config: Config = {
  autoConnect: true,
  readOnlyChainId: Ropsten.chainId,
  readOnlyUrls: {
    [Ropsten.chainId]: getDefaultProvider('ropsten'),
  },
  networks: [Ropsten, Mainnet],
}

export default config
