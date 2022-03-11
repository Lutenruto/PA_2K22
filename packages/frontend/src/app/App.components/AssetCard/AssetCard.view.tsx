import { useState } from "react";
import { useHistory } from "react-router";

import { Button } from "../Button/Button.view";
import { Loader } from "../Loader/Loader.view";
import { Sell } from "../ModalActions/Sell/Sell.controller";
import {
  AssetCardButtonContainer,
  AssetCardData,
  AssetCardImg,
  AssetCardName,
  AssetCardStyled,
} from "./AssetCard.style";

interface AssetCardProps {
  nftData: any;
  data: any;
  showModal: (title: string, children: JSX.Element, img: string) => void;
}

export const AssetCardView = ({ nftData, data, showModal }: AssetCardProps) => {
  const history = useHistory();
  const [hovering, setHovering] = useState(false);
  if (data === undefined) {
    return <Loader />;
  }

  return (
    <AssetCardStyled
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <AssetCardImg
        src={data.data.image}
        alt=""
        onClick={() => {
          history.push(`/nft/${data.mint}`);
        }}
      />
      <AssetCardData hovering={hovering}>
        <AssetCardName>{data.data.name}</AssetCardName>
        <AssetCardButtonContainer>
          <Button
            appearance="primary"
            clickCallback={() => {
              showModal(
                "Selling : " + data.data.name,
                <Sell item={nftData} />,
                data.data.image
              );
            }}
          >
            Sell
          </Button>
        </AssetCardButtonContainer>
      </AssetCardData>
    </AssetCardStyled>
  );
};
