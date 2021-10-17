require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain connect gesture nature swift sock'; 
let testAccounts = [
"0x67f70497aa777a08ab5f2ff21b7872ace69a7658056dc1b9013effaeca5115fc",
"0xb00bf47a475acc094ceaf1048f2dbfab5fd2c54034e2b08b9285c6ef1e876000",
"0x37bf1fd4e0f513aa69c1e22d41d1fd1039161639710c7d86eb2463a792f4b71b",
"0x09cfbce1fc6b5497a28834dc14d21d83176c04d8cc46dfb31bfb15598f6e7f26",
"0x4f440bd90a56970b1c550399cda3bba0b062a3dbbc0a10d2ae0b0e1c50cd12ee",
"0xc578ba47bb477e821e2b3641fcd44751f7ef80c0c5d83fe31b67b184f2dc17e7",
"0xc413ec1601e1871a2ddb1749dc7e6c16df6cbe14b010d7ad88e4b5848169ca44",
"0xbeab05dd3918b815632d7f13540b953d301802238b2412fb31825e3f13acaca8",
"0x2d0a647dbfae473dc13e06c248a55d703ffe7cdc30df0f4d9bff41b9ee563b16",
"0xbfd35c11f68f3990953c1e96847e9a6bcb1cc6bbbb07d5fb3cb1f4f6dd6911b6"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

