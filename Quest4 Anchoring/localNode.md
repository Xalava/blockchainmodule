## Local node
An Ethereum node provides different functionnalities :
1. To be connected to other nodes and exchange blocks and transactions
2. To verify each transaction by running the Ethereum Virtual Machine
3. To provide an API to interact with the node 
4. To provide a basic wallet to sign transactions and collect fees when mining

### Instructions

Launch a local test node. You can use any client (geth, openEthereum...), but I recommand javascript test nodes `hardhat` and `ganache-cli`
**hardhat node**
```sh
npm i hardhat
npx hardhat node
```
**ganache**
```
npm i ganache-cli
npx ganache-cli
```
*You can also use ganache that provides a nice graphical interface. For compatibility, change the listening port to 8545 in the settings*

Noticibly, local javascript nodes are not connected to any network and provide already 10 account populated with test ether.

### Resources

- [hardhat](https://hardhat.org)
- [ganache](https://www.trufflesuite.com/ganache)

### Relevance

We should now have a local blockchain ! 



### Integration: If we can