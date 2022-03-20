import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
//1 setup

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hello World", () => {
  it("should get the hello world", async () => {
    //2 deploy a contract
    const HW = await ethers.getContractFactory("HelloWorld");
    const hello = await HW.deploy();
    await hello.deployed();
    
    expect(await hello.hello()).to.equal("Hello, World");
  });
});
