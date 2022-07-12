import { VStack } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

type Props = {
  children: any
}

export default function Layout(props: Props) {
  return (
    <VStack height="100vh">
      <Header />
      <VStack width="full" overflowY="auto" flex={1}>
        {props.children}
        <Footer />
      </VStack>
    </VStack>
  )
}
