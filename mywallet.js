var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/dist/hdkey')
var util = require('ethereumjs-util')

var mnemonic = bip39.generateMnemonic()
console.log("mnemonic code:")
console.log(mnemonic)

var seed = bip39.mnemonicToSeed(mnemonic)
console.log("seed:")
console.log(seed)

var hdWallet = hdkey.fromMasterSeed(seed)
console.log("hd wallet:")
console.log(hdWallet)

var key1 = hdWallet.derivePath("m/44'/60'/0'/0/0")
console.log("key:")
console.log(key1)

var address1 = util.pubToAddress(key1._hdkey._publicKey, true)
console.log(address1)

address1 = util.toChecksumAddress(address1.toString('hex'))
console.log("address:")
console.log(address1)



