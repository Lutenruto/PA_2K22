import styled from "styled-components/macro";
import { Page } from "styles";

export const GifsStyled = styled(Page)``;

export const GifsContainer = styled.div`
  display: grid;
  width: 100%;
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
