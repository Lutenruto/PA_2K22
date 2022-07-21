// prettier-ignore
import useApi from "hooks/use.api";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";

import { SellView } from "./Sell.view";
import { v4 as uuidv4 } from "uuid";
import { updateModal } from "app/App.components/Modal/Modal.actions";
import { Loader } from "app/App.components/Loader/Loader.view";
interface SellProps {
  item: any;
}
export const Sell = ({ item }: SellProps) => {
  const wallet = useSelector((state: State) => state.wallet);
  const api = useApi();
  const dispatch = useDispatch();
  const sellItem = async (price: number) => {
    let today = new Date();
    let res = await api.post("/sell", {
      id: uuidv4(),
      seller: wallet.address,
      date: today.toString(),
      price: price,
      item: item,
    });
    if (res.status === 201) {
      dispatch(updateModal("Transaction running", <Loader />));
      //dispatch(hideModal());
    }
  };

  return <SellView item={item} wallet={wallet} sellItem={sellItem} />;
};
