import { createConnectionConfig, getParsedNftAccountsByOwner } from "@nfteyez/sol-rayz";
import { Program, Provider, web3 } from "@project-serum/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import idl from "assets/idl.json";
import kp from "assets/keypair.json";
import * as splToken from '@solana/spl-token'
// SystemProgram is a reference to the Solana runtime!
const { SystemProgram } = web3;

const arr = Object.values(kp._keypair.secretKey);
const secret = new Uint8Array(arr);
const baseAccount = web3.Keypair.fromSecretKey(secret);

// Get our program's id from the IDL file.
const programID = new PublicKey(idl.metadata.address);

// Set our network to devnet.
const network = clusterApiUrl("devnet");

// Controls how we want to acknowledge when a transaction is "done".
const opts = {
  preflightCommitment: "processed",
};

export default function callProgram() {
  const sendGif = async (inputValue: any) => {
    if (inputValue.length === 0) {
      return;
    }

    if (
      inputValue.substring(inputValue.length - 4, inputValue.length) !== ".gif"
    ) {
      //TODO Implement error when gif is not valid
      return;
    }

    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      console.log("GIF successfully sent to program", inputValue);
    } catch (error) {
      console.log("Error sending GIF:", error);
    }
  };

  const voteGif = async (link: string, sender: any, direction: any) => {
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);

      let func;
      if (direction === "up") {
        func = program.rpc.upvoteGif;
      } else {
        func = program.rpc.downvoteGif;
      }

      await func(link, sender, {
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  };

  const getProvider = () => {
    const connection = new Connection(network, opts.preflightCommitment as any);
    const provider = new Provider(
      connection,
      (window as any).solana,
      opts.preflightCommitment as any
    );
    return provider;
  };

  const createGifAccount = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);
      await program.rpc.startStuffOff({
        accounts: {
          baseAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [baseAccount],
      });
      return true;
    } catch (error) {
      console.log("Error creating BaseAccount account:", error);
      return false;
    }
  };

  const getGifList = async () => {
    try {
      const provider = getProvider();
      const program = new Program(idl as any, programID, provider);
      const account = await program.account.baseAccount.fetch(
        baseAccount.publicKey
      );
      return account.gifList;
    } catch (error) {
      return null;
    }
  };

  const getBalance = async (pubKey: any) => {
    try {
      const connection = new Connection(
        network,
        opts.preflightCommitment as any
      );
      let balance = await connection.getBalance(pubKey);
      return balance / 10 ** 9;
    } catch (err) {
      console.error(err);
      return;
    }
  };

  const getNfts = async (pubKey: any) => {
    try {
      const connect = createConnectionConfig(clusterApiUrl("devnet"));

      const nfts = await getParsedNftAccountsByOwner({
        publicAddress: pubKey.toString(),
        connection: connect,
      });

      return nfts;
    }catch(err){
      console.log(err)
      return []
    }
  }

  const mintNft = async () => {
    try{
      const connection = new Connection(
        network,
        opts.preflightCommitment as any
      );
      console.log("Generating wallet")
      var fromWallet = web3.Keypair.generate();
      console.log("Airdropping");
      var fromAirdropSignature = await connection.requestAirdrop(
        fromWallet.publicKey,
        web3.LAMPORTS_PER_SOL
      );
      console.log("Airdrop signature", fromAirdropSignature)
      //wait for airdrop confirmation
      await connection.confirmTransaction(fromAirdropSignature);

      console.log("Confirmed airdrop signature")
      //create new token mint

      console.log("Creating mint")
      let mint = await splToken.Token.createMint(
        connection,
        fromWallet,
        fromWallet.publicKey,
        null,
        9,
        splToken.TOKEN_PROGRAM_ID
      );

      console.log("Token minted")
      //get the token account of the fromWallet Solana address, if it does not exist, create it
      let fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        fromWallet.publicKey
      );

      // Generate a new wallet to receive newly minted token
      var toWallet = baseAccount

      //get the token account of the toWallet Solana address, if it does not exist, create it
      var toTokenAccount = await mint.getOrCreateAssociatedAccountInfo(
        toWallet.publicKey
      );


      //minting 1 new token to the "fromTokenAccount" account we just returned/created
      await mint.mintTo(
        fromTokenAccount.address, //who it goes to
        fromWallet.publicKey, // minting authority
        [], // multisig
        1 // how many
      );

      console.log("Set authority")
      await mint.setAuthority(
        mint.publicKey,
        null,
        "MintTokens",
        fromWallet.publicKey,
        []
      );

      // Add token transfer instructions to transaction
      var transaction = new web3.Transaction().add(
        splToken.Token.createTransferInstruction(
          splToken.TOKEN_PROGRAM_ID,
          fromTokenAccount.address,
          toTokenAccount.address,
          fromWallet.publicKey,
          [],
          1
        )
      );

      // Sign transaction, broadcast, and confirm
      var signature = await web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [fromWallet],
        { commitment: "confirmed" }
      );
      console.log("SIGNATURE", signature);
    }catch(err){
      console.log(err)
    }
  }
  return {
    sendGif: (url: string) => sendGif(url),
    voteGif: (link: string, sender: any, direction: any) =>
      voteGif(link, sender, direction),
    createGifAccount: () => createGifAccount(),
    getGifList: () => getGifList(),
    getBalance,
    getNfts,
    mintNft,
  };
}
