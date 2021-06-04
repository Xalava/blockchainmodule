## checkDocument

### Instructions

Write a node script that exports a function `checkDocument()` that
- takes as parameter a transaction id and a string
- connects to a local node (`http://localhost:8545`) 
- returns the date (as an unix timestamp) at which the document was added to the blockchain if the transaction id and the string match
- returns 0 otherwise

```js
function checkDocument(txID, text) {
    //...
}
module.exports = checkDocument
    
}
```
*expected:*
```js
checkDocument("Hello world!","0x49c8803ea126179502d59707dbcd9e9de15f5d441920936e9ec6fd78dd6468d8")
// Expected : 
//1611104541

```

### Resources

- [ethers provider](https://docs.ethers.io/v5/api/providers/provider/#Provider--transaction-methods)

### Relevance

We have created our first transaction programatically