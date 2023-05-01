import { ethers } from 'ethers';
import {} from 'dotenv/config';

const INFURA_KEY = process.env.INFURA_KEY;

const provider = new ethers.providers.InfuraProvider('sepolia', INFURA_KEY);

const main = async () => {
  const block = await provider.getBlockNumber();

  console.log(`\nBlock Number: ${block}\n`);

  const blockInfo = await provider.getBlock(block);

  console.log(blockInfo);

  const { transactions } = await provider.getBlockWithTransactions(block);

  console.log(`\nLogging first transaction in block:\n`);
  console.log(transactions[0]);
};

main();
