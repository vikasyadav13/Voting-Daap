/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   defaultNetwork: "volta",
   networks: {
      hardhat: {}, goerli: { // Add Goerli network configuration
         url: API_URL || "https://goerli.infura.io/v3/df15a538935e492b885c79465a721f73", // Replace with your Infura Project ID
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 21000000, // Adjust gas limit as needed
         gasPrice: 8000000000, // Adjust gas price as needed
      }
   },
}