import styled from "styled-components/macro";
import { SolanaCard } from "styles";

export const AssetCardStyled = styled(SolanaCard)`
  padding: 10px;
  position: relative;
`;

export const AssetCardImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: top;
  width: 100%;
`;

export const AssetCardData = styled.div`
  position: absolute;
  height: 50px;
  background: rgba(1, 1, 1, 0.8);
  bottom: 12.5px;
  width: calc(100% - 20px);
  border-radius: 0px 0px 10px 10px;
`;
export const AssetCardName = styled.div`
  text-align: center;
  margin-top: 5px;
`;
export const AssetCardSeparator = styled.img``;
