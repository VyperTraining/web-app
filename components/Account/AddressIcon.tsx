import { useEffect, useRef } from 'react'

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Jazzicon from '@metamask/jazzicon'

const StyledIdenticon = styled.div<{ size: number }>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: black;
`

type Props = {
  address: string
  size?: number
  border?: number
  borderColor?: string
}

function JazzIcon({ address, size = 32 }: Props) {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    if (address && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(
        Jazzicon(size, parseInt(address.slice(2, 10), 16)),
      )
    }
  }, [address])

  return <StyledIdenticon size={size} ref={ref as any} />
}

export default function AddressIcon({
  address,
  size = 32,
  border = 2,
  borderColor = 'white',
}: Props) {
  const icon = <JazzIcon address={address} size={size} />

  return (
    <Box
      width={`${size}px`}
      height={`${size}px`}
      borderStyle="solid"
      overflow="hidden"
      background="black"
      borderColor={borderColor}
      borderWidth={border}
      borderRadius={size}>
      {icon}
    </Box>
  )
}
