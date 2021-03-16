const router = require('express').Router();
const Web3 = require('web3');
require('dotenv').config();

// Invoking Infura id from .env file
const infuraId = process.env.INFURA_ID;

// Initiating connection with Ethereum blockchain network
var web3 = new Web3("https://rinkeby.infura.io/v3/" + infuraId);

router.route('/:id').get((req, res) => {
  async function asyncCall() {
    // Get transaction details
    var tx = await web3.eth.getTransaction(req.params.id)

    let networkName;
    // networkId returns network type of the ethereum blockchain
    await web3.eth.net.getId().then(networkId => {
      switch (networkId) {
        case 1:
          networkName = "Main";
          break;
        case 2:
          networkName = "Morden";
          break;
        case 3:
          networkName = "Ropsten";
          break;
        case 4:
          networkName = "Rinkeby";
          break;
        case 42:
          networkName = "Kovan";
          break;
        default:
          networkName = "Unknown";
      }
    });
    // Formatting desired JSON output
    let output = {
      "block": {
        "blockHeight": tx.blockNumber
      },
      "outs": [
        {
          "address": tx.to,
          "value": tx.value
        }
      ],
      "ins": [
        {
          "address": tx.from,
          "value": "-" + tx.value
        }
      ],
      "hash":
        tx.hash,
      "currency": "ETH",
      "chain": networkName,
      "state": "confirmed",
      "depositType": "account"
    }
    res.status(200).json(output);
  }
  asyncCall();
});

module.exports = router;