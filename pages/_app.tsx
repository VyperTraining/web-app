import { ChakraProvider } from '@chakra-ui/react'
import { DAppProvider } from '@usedapp/core'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout'
import config from '../config/dapp'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DAppProvider config={config}>
        <Head>
          <title>Web3 ToDo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Trello on the Web3" />
          <meta name="author" content="Vyper Training Team" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ChakraProvider>
  )
}
