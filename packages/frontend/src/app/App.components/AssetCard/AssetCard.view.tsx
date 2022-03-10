import { Loader } from "../Loader/Loader.view";
import {
  AssetCardData,
  AssetCardImg,
  AssetCardName,
  AssetCardSeparator,
  AssetCardStyled,
} from "./AssetCard.style";

interface AssetCardProps {
  data: any;
}
export const AssetCardView = ({ data }: AssetCardProps) => {
  console.log(data);
  if (data === undefined) {
    return <Loader />;
  }

  return (
    <AssetCardStyled>
      <AssetCardImg src={data.data.image} alt="" />
      <AssetCardData>
        <AssetCardName>{data.data.name}</AssetCardName>
        <AssetCardSeparator src="" alt="" />
      </AssetCardData>
    </AssetCardStyled>
  );
};
