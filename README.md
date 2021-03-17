# Web3-by-TransactionHash

It displays all the transaction details for the Ether transfer and ERC20 transfer on the Ethereum blockchain network using transaction hash withe the help of [Web3.js](https://web3js.readthedocs.io/en/v1.3.4/) library.

It supports following operations over transaction hash:

- Ether transfer
- ERC20 transfer

## Test
Test Node. To see if Node is installed, type node -v in Terminal

Test NPM. To see if NPM is installed, type npm -v in Terminal



## Installation

Nodemon installation 
```bash
$ node i nodemon
```



## Downloads

Download all dependencies for your project.

```bash
$ npm install
```

## Quick Start

Run this command on Terminal after installation 
```bash
$ nodemon server
```

Once the application is running, navigate to **http://localhost:5000** in your browser.


**REST API: Show transaction details for ETH transfer**
----
  Returns json data about ETH transfer.

* **URL**

  ```http
  http://localhost:5000/eth/account/api/v1/transaction/:transactionHash
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `transactionHash=[HexaDecimal]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />


* **Sample Request:**
    ```http
    http://localhost:5000/eth/account/api/v1/transaction/0xe22aee0523a69c0b29e69eb16c2e26c8169807c3324881c779f3cc0d3bcdaba3
    ```

* **Sample Response:**


  ```javascript
    {
    "block": {
        "blockHeight": 8244054
    },
    "outs": [
        {
            "address": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            "value": "0"
        }
    ],
    "ins": [
        {
            "address": "0xc5614Db57A4e24BEe825e08a03E41Af281273FEF",
            "value": "-0"
        }
    ],
    "hash": "0xe22aee0523a69c0b29e69eb16c2e26c8169807c3324881c779f3cc0d3bcdaba3",
    "currency": "ETH",
    "chain": "Rinkeby",
    "state": "confirmed",
    "depositType": "account"
    }
  ```

**REST API: Show transaction details for ERC20 transfer**
----
  Returns json data about ERC20 transfer.

* **URL**

  ```http
  http://localhost:5000/eth/contract/api/v1/transaction/:transactionHash
  ```

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `transactionHash=[HexaDecimal]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />


* **Sample Request:**
    ```http
    http://localhost:5000/eth/contract/api/v1/transaction/0x8c75c592382ff0186f8ef4e7bb5bfe33848efb584371b981e6768fe5afb22644
    ```

* **Sample Response:**


  ```javascript
    {
    "block": {
        "blockHeight": 8245274
    },
    "outs": [
        {
            "address": "0xc778417E063141139Fce010982780140Aa0cD5Ab",
            "value": "10000000000000000000",
            "type": "token",
            "coinspecific": {
                "tokenAddress": "0xc778417E063141139Fce010982780140Aa0cD5Ab"
            }
        }
    ],
    "ins": [
        {
            "address": "0xa541864063a60f02acc9f91463e0e0c0cfccca84",
            "value": "-10000000000000000000",
            "type": "token",
            "coinspecific": {
                "tokenAddress": "0xc778417E063141139Fce010982780140Aa0cD5Ab"
            }
        }
    ],
    "currency": "ETH",
    "state": "confirmed",
    "depositType": "Contract",
    "chain": "Rinkeby"
    }
  ```


## Contributing ✨
> Any help and suggestions are very welcome and appreciated.