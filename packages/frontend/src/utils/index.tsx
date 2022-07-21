function checkGifLink(gifLink: string) {
  return gifLink.includes(".gif");
}

function printPartialAddress(address: String) {
  let length = address.length;
  return (
    address.substring(0, 4) + "..." + address.substring(length - 3, length)
  );
}

function roundBalance(balance: number) {
  return balance.toFixed(2);
}

export { checkGifLink, printPartialAddress, roundBalance };
