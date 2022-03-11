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
}
export const AssetCard = ({ nftData }: AssetCardProps) => {
  const [assetAllInfos, setAssetAllInfos] = useState<any>();
  const dispatch = useDispatch();
  const getNftTokenData = async () => {
    let res = await axios.get(nftData.data.uri);
    (res as any).mint = nftData.mint;
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
    />
  );
};
