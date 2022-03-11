import { Loader } from "app/App.components/Loader/Loader.view";
import { AssetCard } from "app/App.components/AssetCard/AssetCard.controller";
import {
  MarketplaceStyled,
  MarketplaceItemsContainer,
  MarketplaceNoItems,
} from "./Marketplace.style";

interface MarketplaceViewProps {
  offers: [];
  loading: boolean;
}

export const MarketplaceView = ({ offers, loading }: MarketplaceViewProps) => {
  if (loading) {
    return (
      <MarketplaceStyled>
        <Loader />
      </MarketplaceStyled>
    );
  }

  if (offers.length === 0) {
    return (
      <MarketplaceStyled>
        <MarketplaceNoItems>
          There is no items to display at the moment
        </MarketplaceNoItems>
      </MarketplaceStyled>
    );
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
