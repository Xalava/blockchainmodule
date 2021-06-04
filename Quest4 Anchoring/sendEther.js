const ethers = require("ethers")

async function sendEther(amount, address) {
    const provider = new ethers.providers.JsonRpcProvider();//http://localhost:8545
    console.log(amount.toString())
    const signer = provider.getSigner()

    const txHash = await signer.sendTransaction({
        to: address,
        value: ethers.utils.parseEther(amount.toString()),
    })
} 
module.exports = sendEther
//sendEther(100,"0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199")
