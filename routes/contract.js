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
    let tx = await web3.eth.getTransactionReceipt(req.params.id);

    // Parse transfer value from input field of tx
    const transferValue = web3.utils.toBN(tx.logs[0].data).toString();

    // Parse receiver address from input field of tx
    const toAddrressHex = tx.logs[0].topics[2];

    let toAddressOriginal;
    if (toAddrressHex === undefined) {
      toAddressOriginal = tx.logs[0].address;
    } else {
      toAddressOriginal = "0x" + toAddrressHex.slice(26, 66);
    }

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
          "address": toAddressOriginal,
          "value": transferValue,

          "type": "token",
          "coinspecific": {
            "tokenAddress": tx.logs[0].address
          }
        }
      ],
      "ins": [
        {
          "address": tx.from,
          "value": "-" + transferValue,
          "type": "token",
          "coinspecific": {
            "tokenAddress": tx.logs[0].address
          }
        }
      ],
      "hash":
        tx.transactionHash,
      "currency": "ETH",
      "state": "confirmed",
      "depositType": "Contract",
      "chain": networkName
    }
    res.status(200).json(output);
  }
  asyncCall();
});

module.exports = router;