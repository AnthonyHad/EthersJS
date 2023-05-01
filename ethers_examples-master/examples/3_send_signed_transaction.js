import { ethers } from 'ethers';

const ALCHEMY_KEY = process.env.ALCHEMY_KEY;
const provider = new ethers.providers.AlchemyProvider('mainnet', ALCHEMY_KEY);

async function main() {}

//https://www.youtube.com/watch?v=yk7nVp5HTCk&t=54s
