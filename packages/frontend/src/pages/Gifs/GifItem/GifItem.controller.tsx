/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import { connectWallet } from 'actions/Wallet.actions';
import callProgram from "hooks/call.program";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";
import { GifItemView } from "./GifItem.view";

interface GifItemProps {
  link: string;
  uploader: string;
  upVoters: [];
  downVoters: [];
}
export const GifItem = ({
  link,
  uploader,
  upVoters,
  downVoters,
}: GifItemProps) => {
  const program = callProgram();
  const wallet = useSelector((state: State) => state.wallet);
  const dispatch = useDispatch();

  const vote = async (link: string, uploader: string, direction: string) => {
    await program.voteGif(link, uploader, direction);
  };

  const tip = (link: string, uploader: string) => {
    // Function still under development
  };

  const connectWalletCb = () => {
    console.log("connecting wallet");
    dispatch(connectWallet());
  };
  return (
    <GifItemView
      link={link}
      uploader={uploader}
      upVoters={upVoters}
      downVoters={downVoters}
      vote={vote}
      tip={tip}
      wallet={wallet}
      connectWallet={connectWalletCb}
    />
  );
};
