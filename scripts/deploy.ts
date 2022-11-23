import { ethers } from "hardhat";

async function main() {
  const counterFactory = await ethers.getContractFactory("Counter");
  const counter = await counterFactory.deploy();
  console.log("Deploying Please wait...");
  await counter.deployed();
  console.log(`deployed to :${counter.address}`);

  const currentVal = await counter.count();
  console.log(`currentValue = ${currentVal}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
