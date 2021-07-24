require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski strategy razor punch property half clock oil genuine'; 
let testAccounts = [
"0x2237b6db19b416594f0c56b96e4d983f19e5be2f9ded3f1738a1441ff9445c06",
"0x81787c19266a681050d4441ee4a4df3bcb657803e8500fb0bf6515b65866bd22",
"0x6950812955f911253076f7f9b15cfba5a8fcb72dfb590047d352954052d39945",
"0x5fa0f6da0da43ad59121634f4cacb982c960f521073073f93492c7940e2dc3fb",
"0x9aaaa0ae4f9852156b20235c1599afc495ad8f4f56b2930402fda04a46862526",
"0x3b8d5b021187c31fd26b54d282721b8df59745c086a34ca90eb4d713aa00ad72",
"0x4b72143c599714d9705d396821686d0646a8a42c31faf575a61776383019189b",
"0xdcc33e92acf33548047ebdd80be97ceab36a13042154afafc12b932d2c35d840",
"0x900d298f1184a17aaed90ad070b7b46fdb25015ef3a04fa2e48dc3e76204871b",
"0xbd3bbc715ae0f99dc156e37f191be37201767158fe0a0bab41f6ee9bb04dce93"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


