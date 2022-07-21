// prettier-ignore
import { triggerReload } from "actions/Reload.actions";
import { Loader } from "app/App.components/Loader/Loader.view";
import { updateModal } from "app/App.components/Modal/Modal.actions";
import useApi from "hooks/use.api";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "reducers";

import { BuyView } from "./Buy.view";
interface BuyProps {
  item: any;
}
export const Buy = ({ item }: BuyProps) => {
  const wallet = useSelector((state: State) => state.wallet);
  const api = useApi();
  const dispatch = useDispatch();
  const buyItem = async () => {
    let res = await api.delete(`/sell`, {
      id: item.id,
    });

    if (res.status === 204) {
      dispatch(triggerReload());
      dispatch(updateModal("Transaction running", <Loader />));
      //dispatch(hideModal());
    }
  };

  return <BuyView item={item} wallet={wallet} buyItem={buyItem} />;
};
