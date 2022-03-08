import { Program, Provider, web3 } from "@project-serum/anchor";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

import idl from "assets/idl.json";
import kp from "assets/keypair.json";

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
      console.log(`GIF successfully ${direction}voted`);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log("Error creating BaseAccount account:", error);
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

  return {
    sendGif: (url: string) => sendGif(url),
    voteGif: (link: string, sender: any, direction: any) =>
      voteGif(link, sender, direction),
    createGifAccount: () => createGifAccount(),
    getGifList: () => getGifList(),
    getBalance,
  };
}
