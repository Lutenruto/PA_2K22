/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import useApi from 'hooks/use.api';
import * as React from "react";
import { useSelector } from "react-redux";
import { State } from "reducers";
import { MarketplaceView } from "./Marketplace.view";

export const Marketplace = () => {
  const api = useApi();
  const [offers, setOffers] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);
  const reload = useSelector((state: State) => state.reload);
  const getOffers = async () => {
    try {
      let res = await api.get("/sell");
      setOffers(res.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getOffers();
  }, [reload]);
  return <MarketplaceView offers={offers} loading={loading} />;
};
