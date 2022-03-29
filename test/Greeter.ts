import { ethers } from "hardhat";
import { expect } from "chai";

import { Greeter } from "../typechain";

describe("Greeter", function () {
  let greeter: Greeter;

  beforeEach(async () => {
    const GreeterFactory = await ethers.getContractFactory("Greeter");

    greeter = (await GreeterFactory.deploy("Hello, world!")) as Greeter;

    await greeter.deployed();
  });

  it("should return the new greeting once it's changed", async function () {
    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
