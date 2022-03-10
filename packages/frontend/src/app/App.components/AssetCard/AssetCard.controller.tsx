/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import axios from 'axios';
import * as React from "react";
import { useEffect, useState } from "react";

import { AssetCardView } from "./AssetCard.view";

interface AssetCardProps {
  nftData: any;
}
export const AssetCard = ({ nftData }: AssetCardProps) => {
  const [assetAllInfos, setAssetAllInfos] = useState<any>();

  const getNftTokenData = async () => {
    setAssetAllInfos(await axios.get(nftData.data.uri));
  };

  useEffect(() => {
    getNftTokenData();
  }, []);

  return <AssetCardView data={assetAllInfos} />;
};
