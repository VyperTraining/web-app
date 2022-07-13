import { useLookupAddress } from '@usedapp/core'

import truncateAddress from '../../utils/truncateAddress'

type Props = {
  address: string
}

export default function AccountName(props: Props) {
  const { ens, isLoading } = useLookupAddress(props.address)

  if (isLoading) {
    return <>...</>
  }

  if (!ens) {
    return <>{truncateAddress(props.address)}</>
  }

  return <>{ens}</>
}
