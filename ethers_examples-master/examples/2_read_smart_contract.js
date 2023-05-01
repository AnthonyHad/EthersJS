import { ethers } from 'ethers';

const INFURA_KEY = process.env.INFURA_KEY;
const provider = new ethers.providers.InfuraProvider('mainnet', INFURA_KEY);

//ethersJS allows to store ABI in an array and only store the functions we care about
const ERC20_ABI = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function totalSupply() view returns (uint256)',
  'function balanceOf(address) view returns (uint)',
];
// create a JS version of a contract to read information form it
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';
const contract = new ethers.Contract(usdtContractAddress, ERC20_ABI, provider);

async function main() {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();
  console.log(`\nReading from ${usdtContractAddress}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  const balance = await contract.balanceOf(
    '0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503'
  );
  console.log(`Balance Returned: ${balance}`);
  console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`);
}

main();
