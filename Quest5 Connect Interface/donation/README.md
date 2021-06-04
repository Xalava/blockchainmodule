## Donation

### Instructions

Create a web page, `donation.html` that loads an ethereum library and connects to a local `http://localhost:8545`)`.

Similarly to `randomWallet`, when loaded the page generates a new wallet. The page should display the address of the wallet (inside an element with id `address`) and the balance of this address on (inside an element with id `balance`).

Additionnaly, the page contains an input field (id:`amount`) and a button (id:`donate`) that allows the user to donate to the creator of the wallet at the address `0x837F324FF70AD9AE4B71084c941c23dDF8371d60`

```html
  <input type="number" id="amount">
  <button id="donate">Donate</button>
```

### Resources
- [ethers : wallet](https://docs.ethers.io/v5/api/signer/#Wallet)
- [web3 : accounts](https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html)

### Relevance

Sending a transaction from our page