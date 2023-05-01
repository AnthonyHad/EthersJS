import { ethers } from 'ethers';
import {} from 'dotenv/config';
const INFURA_KEY = process.env.INFURA_KEY;

const provider = new ethers.providers.InfuraProvider('sepolia', INFURA_KEY);

const account1 = '0xbe5C866d93E277323A691BC61B4b6737aAb59DFe'; //sender
const account2 = '0x484bE0a19e5A8314c132B9bd9724D0118d46C36f'; //receiver

const privateKey1 = process.env.PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey1, provider);

const ERC20_ABI = [
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint256 amount) returns(bool) ',
];

const tokenContractAddress = '0x779877A7B0D9E8603169DdbD7836e478b4624789';
const contract = new ethers.Contract(tokenContractAddress, ERC20_ABI, provider);

const main = async () => {
  const senderBalance = await contract.balanceOf(account1);
  const receiverBalance = await contract.balanceOf(account2);

  console.log(`\nReading from ${tokenContractAddress}\n`);
  console.log(`\nSender balance: ${senderBalance}\n`);

  const contractWithWallet = contract.connect(wallet);
  const tx = await contractWithWallet.transfer(account2, 1);

  await tx.wait();
  console.log(tx);

  console.log(`\nSender balance: ${senderBalance}\n`);
  console.log(`\nReiceiver balance: ${receiverBalance}\n`);
};

main();
