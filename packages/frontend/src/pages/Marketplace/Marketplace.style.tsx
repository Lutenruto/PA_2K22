import styled from "styled-components/macro";
import { Page } from "styles";

export const MarketplaceStyled = styled(Page)``;

export const MarketplaceItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
`;
