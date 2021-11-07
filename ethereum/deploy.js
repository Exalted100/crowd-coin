const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider (
    "insert mmenomics",
    "https://rinkeby.infura.io/v3/4a6ddb668c1b4c9d83d7149055df904e"
)

const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log("Attempting to deploy from the account: " + accounts[0])
    const result = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object})
        .send({ gas: 3000000, from: accounts[0] })

        console.log("Contract deployed to: " + result.options.address)
}
deploy()