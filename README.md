# EVM-based Smart Contract Scaffold

A Typescript [Hardhat-based](https://hardhat.org/) template to develop evm-based smart contracts with all the tooling you need.

#### Features

* Uses [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) to keep track of deployments (upgradable or normal)
* Uses [**typechain**](https://github.com/dethcrypto/TypeChain) to auto-generate typescript bindings for compiled contracts, useful for auto-completion in your frontend dApps
* Uses **semantic-release** and commitlint for a streamline CI
* Optionally publishes versioned contracts to NPM, along with their Typescript bindings, **ABIs** (useful for interacting from your dApp) and **bytecodes** (useful when deploying contracts using ethers.js or web3).
* Supports multiple chains
* **Gas cost** reporter using CoinMarketCap APIs for your contract deployment and each interaction
* **Contract size** calculator plugin for Hardhat
* Automated [Etherscan](https://etherscan.io/) verification for deployed contracts

## Getting Started

1. Clone this repo (or click on "Use Template" button above in Github):

    ```sh
    git clone https://github.com/0xflair/evm-contract-scaffold
    ```

2. Create a `.env` file based on `.env.example` and update the values.
3. Create your first contract in `src/`.
4. Compile the contracts:

    ```sh
    npm run compile
    ```
    
5. Deploy the contracts:

    ```sh
    npm run deploy:rinkeby
    ```

6. Verify the contracts on Etherscan:

    ```sh
    npm run verify:rinkeby
    ```

## Testing

1. Write your tests in `test/` directory.
2. Execute them:

    ```sh
    npm run test
    ```

## License

This repository is under MIT license.