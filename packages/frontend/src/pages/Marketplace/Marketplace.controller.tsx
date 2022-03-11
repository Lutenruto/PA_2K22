/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import useApi from 'hooks/use.api';
import * as React from "react";
import { MarketplaceView } from "./Marketplace.view";

export const Marketplace = () => {
  const api = useApi();
  const [offers, setOffers] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

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
  }, []);
  return <MarketplaceView offers={offers} loading={loading} />;
};
