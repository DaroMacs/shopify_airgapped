export const shortenWalletAddress = (address: string) =>
  `${address.substring(0, 6)}…${address.substring(
    address.length - 4,
    address.length,
  )}`;
