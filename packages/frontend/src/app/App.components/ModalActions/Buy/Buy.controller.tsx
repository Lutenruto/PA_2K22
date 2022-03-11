// prettier-ignore
import { connectWallet } from 'actions/Wallet.actions';
import * as React from "react";
import { useDispatch } from "react-redux";

import { BuyView } from "./Buy.view";

export const Buy = () => {
  const dispatch = useDispatch();
  const connectWalletCb = () => {
    dispatch(connectWallet());
  };

  return <BuyView connectWallet={connectWalletCb} />;
};
