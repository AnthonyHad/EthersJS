import { ethers } from 'ethers';
import {} from 'dotenv/config';

const INFURA_KEY = process.env.INFURA_KEY;

const provider = new ethers.providers.InfuraProvider('sepolia', INFURA_KEY);

const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',

  'event Transfer(address indexed from, address indexed to, uint amount)',
];

const linkContractAddress = '0x779877A7B0D9E8603169DdbD7836e478b4624789';

const contract = new ethers.Contract(linkContractAddress, ERC20_ABI, provider);

const main = async () => {
  const block = await provider.getBlockNumber();

  const transferEvents = await contract.queryFilter(
    'Transfer',
    block - 1,
    block
  );
  console.log(transferEvents);
};

main();
