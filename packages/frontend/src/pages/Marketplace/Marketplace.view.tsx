import { Loader } from "app/App.components/Loader/Loader.view";
import { AssetCard } from "app/App.components/AssetCard/AssetCard.controller";
import {
  MarketplaceStyled,
  MarketplaceItemsContainer,
} from "./Marketplace.style";

interface MarketplaceViewProps {
  offers: [];
  loading: boolean;
}

export const MarketplaceView = ({ offers, loading }: MarketplaceViewProps) => {
  if (loading) {
    return <Loader />;
  }

  if (offers.length === 0) {
    return <MarketplaceStyled>No items to display</MarketplaceStyled>;
  }

  return (
    <MarketplaceStyled>
      <MarketplaceItemsContainer>
        {offers.map((offer: any, key: number) => {
          return <AssetCard nftData={offer.item} key={key} />;
        })}
      </MarketplaceItemsContainer>
    </MarketplaceStyled>
  );
};
