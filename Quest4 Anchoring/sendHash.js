// const hre = require("hardhat");
// const ethers = hre.ethers

const ethers = require("ethers")
const crypto = require("crypto");

 async function sendHash(entry) {
    let entryBuffer  = Buffer.from(entry)
    let hash = crypto.createHash("sha256").update(entryBuffer).digest("hex")

    const provider = new ethers.providers.JsonRpcProvider();//http://localhost:8545
    const accounts = await provider.listAccounts();
    const signer = provider.getSigner()
    // console.log(hash)
    // console.log(parseInt(hash,16))
    // console.log(ethers.utils.isHexString(hash))
    // console.log(ethers.utils.hexlify(hash))
    const tx = await signer.sendTransaction({
        to: "0x7A7a4EdC679bC4E29F74E32E9eEDd256cd435FBb",
        value: ethers.utils.parseEther("0"),
        data: '0x'+ hash 
    })
    await tx.wait()
    return tx.hash
} 
module.exports = sendHash