import { contractAddress } from "./constants";

export default async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getEditionDrop(contractAddress);

  const balance = await editionDrop.balanceOf(address, 0);

  // gt = greater than
  return balance.gt(0);
}
