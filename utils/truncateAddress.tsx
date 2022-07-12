export default function truncateAddress(
  address: string,
  startSize = 5,
  endSize = 4,
) {
  if (address.length < startSize + endSize + 3) {
    return address
  }

  const start = address.substring(0, startSize)
  const end = address.substring(address.length - endSize)

  return `${start}...${end}`
}
