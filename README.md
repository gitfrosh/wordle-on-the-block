# Wordle on the Block
Wordle on the Block is a word game, chiefly inspired by the original wordle game that was built by Josh Wardle. In this online game, the user is able to play a daily round of Wordle and has the chance to proudly mint their result (may it be good or bad) on the Ethereum blockchain as an NFT. During this process, the user is asked to donate a small amount of Matic to a charity of their choosing to help a great cause.

This fork/enhancements is generously supported by [Filecoin's Next Steps Microgrant](https://github.com/filecoin-project/devgrants/issues/746).

It was originally built by Team Maxima ([Afoma](https://github.com/Afoma), [Rike](https://github.com/gitfrosh), [Kristen](https://github.com/cuddleofdeath), [Brenda](https://github.com/mejia-b) and [Ana](https://github.com/mspuz) ) during the 2022 [web3con hackathon](https://www.web3con.dev/hackathon).


## Get it started
### Frontend
This project is built with create-react-app and craco It stores Wordle NFTs on Fleek/Filecoin. Required secrets are `REACT_APP_FLEEK_KEY`, `REACT_APP_FLEEK_SECRET`, make sure they are added to `.env` for local run

#### `npm install`
Install dependencies.
#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Backend
This application is built with Solidity/Hardhat on EVM. It uses Alchemy (MUMBAI_URL, RINKEBY_URL, ..) and needs your PRIVATE_KEY for deploying. Make sure secrets are added to `.env` for local run
#### `npm install`
Install dependencies.

#### `npx hardhat run scripts/run.js`
Dry-run test functions on your smart contract.

#### `npx hardhat run scripts/deploy.js --network rinkeby`
Deploy your smart contract. 
