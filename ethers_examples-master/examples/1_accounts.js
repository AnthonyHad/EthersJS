import { ethers } from 'ethers';

const INFURA_KEY = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider('mainnet', INFURA_KEY);

const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';

async function main() {
  const balance = await provider.getBalance(address);
  console.log(
    `\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
}

main();
