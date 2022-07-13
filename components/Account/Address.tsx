import { useLookupAddress } from '@usedapp/core'

import truncateAddress from '../../utils/truncateAddress'

export default function Address({ address }: { address: string }) {
  const { ens, isLoading } = useLookupAddress(address)

  if (isLoading) {
    return <>...</>
  }

  if (!ens) {
    return <>{truncateAddress(address)}</>
  }

  return <>{ens}</>
}
