var bip39 = require('bip39')
var hdkey = require('ethereumjs-wallet/dist/hdkey')
var util = require('ethereumjs-util')
var fs = require("fs")

var mnemonic = bip39.generateMnemonic()
mnemonic = "enjoy legal modify purchase arrest place fold funny ripple unaware flock volume"
console.log("mnemonic code:")
console.log(mnemonic)

var seed = bip39.mnemonicToSeed(mnemonic)
console.log("seed:")
console.log(seed)

console.log("---------------------------")

var hdWallet = hdkey.fromMasterSeed(seed)
console.log("hd wallet:")
console.log(hdWallet)

var privateExtend = hdWallet.privateExtendedKey()
console.log("privateExtend:")
console.log(privateExtend)

//var publicExtend = hdWallet.publicExtendedKey()
//console.log("publicExtend:")
//console.log(publicExtend)

console.log("---------------------------")


var key1 = hdWallet.derivePath("m/44'/60'/0'/0")
console.log("key1:")
console.log(key1)
publicExtend = key1.publicExtendedKey()
console.log("publicExtend:")
console.log(publicExtend)

index = 2

var key2 = key1.deriveChild(index)
console.log("key2:")
console.log(key2)

console.log("---------------------------")

var passwd= "test"
var hdWallet1 = key2.getWallet()
var v3 = hdWallet1.toV3String(passwd)
console.log("v3 format:")
console.log(v3)

var hdWallet1Name = hdWallet1.getV3Filename()
console.log(hdWallet1Name)


var fs = require("fs");
fs.writeFile(hdWallet1Name,v3,{flag:'a',encoding:'utf-8',mode:'0666'},function(err){
     if(err){
         console.log("文件写入失败")
     }else{
         console.log("文件追加成功");
     }

}) 


console.log("---------------------------")
console.log("public key:")
console.log(key2._hdkey._publicKey)

var address1 = util.pubToAddress(key2._hdkey._publicKey, true)
console.log("address byte:")
console.log(address1)

address1 = util.toChecksumAddress(address1.toString('hex')).toLowerCase()
console.log("address:")
console.log(address1)


console.log("---------------------------")

//var hdWallet1 = hdkey.fromExtendedKey(privateExtend)
var hdWallet1 = hdkey.fromExtendedKey(publicExtend)

console.log("hd wallet1:")
console.log(hdWallet1)


var key2 = hdWallet1.deriveChild(index)
//var key2 = hdWallet1.deriveChild(0)
console.log("public key2:")
console.log(key2)

address1 = util.pubToAddress(key2._hdkey._publicKey, true)
console.log(address1)

address1 = util.toChecksumAddress(address1.toString('hex')).toLowerCase()
console.log("address:")
console.log(address1)

