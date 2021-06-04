const ethers = require("ethers")
const crypto = require("crypto");

 async function checkDocument(text, txID) {
    let entryBuffer  = Buffer.from(text)
    let hash = crypto.createHash("sha256").update(entryBuffer).digest("hex")

    const provider = new ethers.providers.JsonRpcProvider();//http://localhost:8545
    let tx
    try {
        tx = await provider.getTransaction( txID)
    } catch(err) {
        console.error(err.reason)
        return 0
    }

    if(tx === null){
        console.error("transaction not found")
        return 0
    }

    if (tx.data != '0x' +hash){
        console.error("Hash registered do not match the string")
        return 0
    }
    let block = await provider.getBlock(tx.block)
    let timestamp = block.timestamp
    return timestamp 
} 
module.exports = checkDocument   

