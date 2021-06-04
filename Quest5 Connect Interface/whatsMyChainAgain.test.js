const { expect } = require("chai");
const ethers = require("ethers")
const puppeteer = require('puppeteer'); 
const opts = {} //process.env.D ? { headless: false, slowMo: 250 } : {}; 

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

describe('Remote note info', function() {
  let browser;
  let page;
  let server;
  let provider
  let BLOCKNUMBER

  before(async function() { 
    this.timeout(10000);
    const app = require('express')();
    app.use(require('express-static')('.'));
    server = await app.listen(3001);

    browser = await puppeteer.launch(opts);
    page = await browser.newPage();
    await page.goto('http://localhost:3001/whatsMyChainAgain.sl.html'); 

    provider = new ethers.providers.getDefaultProvider('mainnet');
    BLOCKNUMBER = await provider.getBlockNumber()

    // provider = new EtherscanProvider();
  });

  after(async function() {
    await browser.close();
    await server.close();
  });

  it('Should have the correct chainID', async function() {  
    await page.waitForSelector('#chainId', {visible: true})
    sleep(1000)
    const pageChainId = await page.$eval('#chainId', ci => ci.textContent)
    expect(parseInt(pageChainId)).to.be.equal(1) 
  }); 

  it('Should have the correct blocknumber', async function() {  
    await page.waitForSelector('#lastBlockNumber')
    const pageBlockNumber = await page.$eval('#lastBlockNumber', el => el.textContent);
    expect(Math.abs(parseInt(pageBlockNumber)-BLOCKNUMBER)).to.be.lessThan(100) 
  }); 

  it('Should have the correct number of transactions', async function() {  
    await page.waitForSelector('#numberOfTransactions')
    await page.waitForSelector('#lastBlockNumber')
    const pageBlockNumber = await page.$eval('#lastBlockNumber', el => el.textContent);
    let blck = await provider.getBlock(parseInt(pageBlockNumber))
    let nbTx = blck.transactions.length
    await sleep(100)
    const pageNumberOfTransactions = await page.$eval('#numberOfTransactions', el => el.textContent);
    expect(parseInt(pageNumberOfTransactions)).to.be.equal(nbTx) 
  }); 
});