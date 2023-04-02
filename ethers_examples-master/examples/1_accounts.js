import { ethers } from 'ethers';

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const provider = new ethers.providers.AlchemyProvider('mainnet', ALCHEMY_KEY);

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

async function main() {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
}

main();
