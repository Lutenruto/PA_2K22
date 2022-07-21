import styled from "styled-components/macro";
import { SolanaCard } from "styles";
export const GifContainer = styled(SolanaCard)`
  padding: 20px;
`;

export const GifUploader = styled.p`
  color: white;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const GifImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const GifActions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0px 15px;
`;

export const GifActionsNotConnected = styled.div`
  padding: 0px 15px;
`;
