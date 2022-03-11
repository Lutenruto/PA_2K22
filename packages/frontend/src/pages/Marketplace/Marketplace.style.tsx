import styled from "styled-components/macro";
import { Page } from "styles";

export const MarketplaceStyled = styled(Page)``;

export const MarketplaceItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;

export const MarketplaceNoItems = styled.div`
  margin-top: 60px;
  font-family: "Raleway";
  font-size: 30px;
  text-align: center;
`;
