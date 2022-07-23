import { Keypair } from "@solana/web3.js";
const { base58_to_binary } = require('base58-js')

export class WalletController {
 // wallet adress : 9iU79miR4qyBirYEvUgsSLHV9k78R9kxyiWiMibm81L1
 // wallet private key :  5x8S3noxMSdjp8rMicpGkusCpV2yDW6d7XC6dATa9cq1byATK1Fh75AWUZ6tf6Wpyj8fMjGgtqpZNCaDvfe9nB81
 privateKey = "5x8S3noxMSdjp8rMicpGkusCpV2yDW6d7XC6dATa9cq1byATK1Fh75AWUZ6tf6Wpyj8fMjGgtqpZNCaDvfe9nB81"
 keypair = new Keypair



  constructor() {
     var byte_array = base58_to_binary(this.privateKey)
     this.keypair = Keypair.fromSecretKey(byte_array);    
  }

  async getWallet(): Promise<any> {
    console.log(this.keypair);  
    return this.keypair;
  }

  
  
}