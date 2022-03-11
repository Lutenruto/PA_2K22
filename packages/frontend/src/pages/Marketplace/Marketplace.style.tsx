import styled from "styled-components/macro";
import { Page } from "styles";

export const MarketplaceStyled = styled(Page)``;

export const MarketplaceItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;

  @media (max-width: 1740px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const MarketplaceNoItems = styled.div`
  margin-top: 60px;
  font-family: "Raleway";
  font-size: 30px;
  text-align: center;
`;
