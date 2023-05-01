import { ethers } from 'ethers';
import {} from 'dotenv/config';
const INFURA_KEY = process.env.INFURA_KEY;

const provider = new ethers.providers.InfuraProvider('sepolia', INFURA_KEY);

const account1 = '0xbe5C866d93E277323A691BC61B4b6737aAb59DFe'; //sender
const account2 = '0x484bE0a19e5A8314c132B9bd9724D0118d46C36f'; //receiver

const privateKey1 = process.env.PRIVATE_KEY;

const wallet = new ethers.Wallet(privateKey1, provider);

async function main() {
  //show account1 balance before transfer
  const senderBalanceBefore = await provider.getBalance(account1);
  //show account2 balance before transfer
  const receiverBalanceBefore = await provider.getBalance(account2);
  console.log(
    `\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`
  );
  console.log(
    `\nReceiver balance before: ${ethers.utils.formatEther(
      receiverBalanceBefore
    )}`
  );

  //Send Ether
  const tx = await wallet.sendTransaction({
    to: account2,
    value: ethers.utils.parseEther('0.01'),
  });
  //Wait for Transaction to be validated
  await tx.wait();
  console.log(tx);
}

//show account1 balance After transfer
const senderBalanceAfter = await provider.getBalance(account1);
//show account2 balance After transfer
const receiverBalanceAfter = await provider.getBalance(account2);
console.log(
  `\nSender balance After: ${ethers.utils.formatEther(senderBalanceAfter)}`
);
console.log(
  `\nReceiver balance After: ${ethers.utils.formatEther(receiverBalanceAfter)}`
);

main();
