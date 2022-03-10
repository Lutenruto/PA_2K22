// prettier-ignore
import { connectWallet } from 'actions/Wallet.actions';
import * as React from "react";
import { useDispatch } from "react-redux";

import { NotConnectedView } from "./NotConnected.view";

export const NotConnected = () => {
  const dispatch = useDispatch();
  const connectWalletCb = () => {
    dispatch(connectWallet());
  };

  return <NotConnectedView connectWallet={connectWalletCb} />;
};
