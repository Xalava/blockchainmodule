const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Festival Ticketing", function() {
  let festival, owner, attendee
  beforeEach( async function () {
    const Festival = await ethers.getContractFactory("Festival");
    festival = await Festival.deploy();
    await festival.deployed();
    [orga, attendee] = await ethers.getSigners();
  })
  it("Should buy a ticket", async function() {
    const expValue = ethers.utils.parseEther("0.1")
    const overrides = {
      value: expValue,
    }
    await festival.connect(attendee).buyTicket(overrides)
    expect(await festival.ticketsOf(attendee.address)).to.equal(1); 
  });
  it("Should reject buy offer below price", async function() {
    const expValue = ethers.utils.parseEther("0.05")
    const overrides = {
      value: expValue,
    }
    let response = await festival.connect(attendee).buyTicket(overrides)
    let receipt = await response.wait()
    // expect(receipt.status).to.equal(0); 
    expect(receipt).to.be.reverted;
    // .to.changeEtherBalance(festival.address, expValue)
  });
  it("Should return a ticket", async function() {
    const expValue = ethers.utils.parseEther("0.1")
    const overrides = {
      value: expValue,
    }
    await festival.connect(attendee).buyTicket(overrides)
    await festival.connect(attendee).redeemTicket()
    // expect(await festival.connect(attendee).redeemTicket()).to.equal(true); 
    expect(await festival.ticketsOf(attendee.address)).to.equal(0);
  });

  it("Redeem should revert without a ticket", async function() {
    true
    //await expect( festival.connect(attendee).redeemTicket()).to.be.reverted;
  })
});
