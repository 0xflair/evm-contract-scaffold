# EVM-based Smart Contract Scaffold

A Typescript [Hardhat-based](https://hardhat.org/) template to develop evm-based smart contracts with all the tooling you need.

#### Features

* Uses [hardhat-deploy](https://github.com/wighawag/hardhat-deploy) to keep track of deployments (upgradable or normal)
* Uses [typechain](https://github.com/dethcrypto/TypeChain) to auto-generate typescript bindings for compiled contracts, useful for auto-completion in your frontend dApps
* Uses [semantic-release](https://github.com/semantic-release/semantic-release) and commitlint for a streamline CI
* Uses Github Actions to **publish** versioned contracts to NPM, along with their Typescript bindings, **ABIs** (useful for interacting from your dApp) and **bytecodes** (useful when deploying contracts using ethers.js or web3).
* Supports multiple chains
* **Gas cost** reporter using CoinMarketCap APIs for your contract deployment and each interaction
* **Contract size** calculator plugin for Hardhat
* Automated [Etherscan](https://etherscan.io/) verification for deployed contracts

## Getting Started

1. Clone this repo (or click on "Use Template" button above in Github), then update the `.github/CODEOWNERS`:

    ```sh
    git clone https://github.com/0xflair/evm-contract-scaffold my-amazing-contracts
    vi my-amazing-contracts/.github/CODEOWNERS
    ```

2. Create a `.env` file based on `.env.example` and update the values.
3. Create your first contract in `src/`.
4. Compile the contracts:

    ```sh
    npm run compile
    ```

## Deploying

When you are ready, let's deploy the contract on the blockchain and have it verified in corresponding block scanner.

1. Deploy the contracts:

    ```sh
    npm run deploy:rinkeby
    ```

2. Verify the contracts on Etherscan:

    ```sh
    npm run verify:rinkeby
    ```

## Releasing

If you want your contract to be released as an NPM package you can:

1. Create a new [**Automation** token](https://docs.npmjs.com/about-access-tokens) in your NPM account.
2. Add a new secret called `NPM_TOKEN` in your Github repository > Settings > Secrets > Actions.
3. Commit anything on `main` branch then automatically you'll get a new release.

Ensure your main branch is either [does not require status checking](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/managing-a-branch-protection-rule#creating-a-branch-protection-rule), or has "bypass" exception for [semantic-release-bot](https://github.com/semantic-release-bot) so that it can push new tags and releases on the Github repo.
## Testing

1. Write your tests in `test/` directory.
2. Execute them:

    ```sh
    npm run test
    ```

## License

This repository is under MIT license.