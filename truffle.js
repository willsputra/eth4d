const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'hollow eye race unfold leaf way naive trumpet method diamond uncover cruise';

module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/oOPqn0LDTsS4RA7Rn7BF")
      },
      network_id: "4" // Match any network id
    }
  }
};
