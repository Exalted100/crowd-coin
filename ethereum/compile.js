const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "Contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

let input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ["abi", "evm.bytecode.object"]
            }
        }
    }
};

input = JSON.stringify(input)
let output = solc.compile(input)
output = JSON.parse(output)

let contracts = output.contracts['Campaign.sol']

for(let key in contracts){
    fs.outputJSONSync(
        path.resolve(buildPath, key+'.json'),
        contracts[key]
    )
}