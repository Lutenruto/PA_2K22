/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import axios from 'axios';
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { showModalImg } from "../Modal/Modal.actions";
import { AssetCardView } from "./AssetCard.view";

interface AssetCardProps {
  nftData: any;
  type: "buy" | "sell";
}
export const AssetCard = ({ nftData, type }: AssetCardProps) => {
  const [assetAllInfos, setAssetAllInfos] = useState<any>();
  const dispatch = useDispatch();
  const getNftTokenData = async () => {
    let url;
    let mint;
    if (nftData.data === undefined) {
      url = nftData.item.data.uri;
      mint = nftData.item.mint;
    } else {
      url = nftData.data.uri;
      mint = nftData.mint;
    }
    let res = await axios.get(url);
    (res as any).mint = mint;
    setAssetAllInfos(res);
  };

  const showModalImgCb = (
    title: string,
    children: JSX.Element,
    img: string
  ) => {
    dispatch(showModalImg(title, children, img));
  };

  useEffect(() => {
    getNftTokenData();
  }, []);

  return (
    <AssetCardView
      nftData={nftData}
      data={assetAllInfos}
      showModal={showModalImgCb}
      type={type}
    />
  );
};
