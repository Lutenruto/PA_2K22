/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import { connectWallet } from 'actions/Wallet.actions';
import { Loader } from "app/App.components/Loader/Loader.view";
import {
  SHOW_MODAL,
  UPDATE_MODAL,
} from "app/App.components/Modal/Modal.actions";
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
  getGifs: () => void;
}
export const GifItem = ({
  link,
  uploader,
  upVoters,
  downVoters,
  getGifs,
}: GifItemProps) => {
  const program = callProgram();
  const wallet = useSelector((state: State) => state.wallet);
  const dispatch = useDispatch();

  const vote = async (link: string, uploader: any, direction: string) => {
    dispatch({
      type: SHOW_MODAL,
      title: "Transaction running...",
      children: <Loader />,
    });
    let res = await program.voteGif(link, uploader, direction);
    if (res) {
      getGifs();
      dispatch({
        type: UPDATE_MODAL,
        title: "Success",
        children: <div>You successfully voted for this gif</div>,
      });
    } else {
      dispatch({
        type: UPDATE_MODAL,
        title: "Error",
        children: (
          <div>
            There was an error while voting this gif, you may have already voted
            for this one
          </div>
        ),
      });
    }
  };

  const tip = (link: string, uploader: string) => {
    dispatch({
      type: SHOW_MODAL,
      title: "Patience !",
      children: (
        <div style={{ marginTop: "20px" }}>
          This function is still under construction :)
        </div>
      ),
    });
  };

  const connectWalletCb = () => {
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
