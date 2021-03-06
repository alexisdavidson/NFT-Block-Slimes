require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "ropsten",
  networks: {
     hardhat: {},
     ropsten: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`]
     }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
