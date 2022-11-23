import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { Counter__factory } from "../typechain-types/factories/Counter__factory";
import { Counter } from "../typechain-types/Counter";

describe("Counter", () => {
  let counterFactory: Counter__factory;
  let counter: Counter;
  beforeEach(async () => {
    counterFactory = await ethers.getContractFactory("Counter");
    counter = await counterFactory.deploy();
  });

  it("Should start with 0", async () => {
    const expectedVal: string = "0";
    const currentVal: string = await (await counter.count()).toString();
    assert.equal(currentVal, expectedVal);
  });

  it("Should increment while incremented", async () => {
    const expectedVal: string = "1";
    const action = await counter.increment();
    await action.wait(1);
    const currentVal: string = await (await counter.count()).toString();
    assert.equal(currentVal, expectedVal);
  });
  it("Should decrement while decremented", async () => {
    const expectedVal: string = "0";
    await counter.increment();
    const action = await counter.decrement();
    await action.wait(1);
    const currentVal: string = await (await counter.count()).toString();
    assert.equal(currentVal, expectedVal);
  });
});
