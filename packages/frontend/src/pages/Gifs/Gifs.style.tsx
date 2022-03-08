import styled from "styled-components/macro";
import { Page } from "styles";

export const GifsStyled = styled(Page)``;

export const GifsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 20px;
`;
