// prettier-ignore
import useApi from "hooks/use.api";
import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "reducers";

import { SellView } from "./Sell.view";
import { v4 as uuidv4 } from "uuid";
interface SellProps {
  item: any;
}
export const Sell = ({ item }: SellProps) => {
  const wallet = useSelector((state: State) => state.wallet);
  const api = useApi();
  const sellItem = async (price: number) => {
    let today = new Date();
    api.post("/sell", {
      id: uuidv4(),
      seller: wallet.address,
      date: today.toString(),
      price: price,
      item: item,
    });
  };

  return <SellView item={item} wallet={wallet} sellItem={sellItem} />;
};
