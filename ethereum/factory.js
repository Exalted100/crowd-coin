import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    "0xC0268c2bC6d26372163D483777Ac4a9DCE4e9C75"
)

export default instance;