import styled from "styled-components/macro";
import { Page } from "styles";

export const MintStyled = styled(Page)`
  font-family: "Raleway";
`;

export const MintForm = styled.div`
  width: 500px;
  margin: auto;
`;

export const MintRow = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5px;
`;

export const MintLabel = styled.div`
  font-size: 20px;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

export const MintInput = styled.input`
  height: 35px;
  &&::placeholder {
    color: black;
    padding: 5px;
  }
  border-radius: 10px;
  border: none;
  padding: 10px;
`;
