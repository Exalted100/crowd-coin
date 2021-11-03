import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    web3 = new Web3(window.web3.currentProvider)
} else {
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/4a6ddb668c1b4c9d83d7149055df904e"
    )
    web3 = new Web3(provider)
}

export default web3;