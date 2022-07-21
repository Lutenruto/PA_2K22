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
  cursor: pointer;
`;

export const AssetCardData = styled.div<{ hovering: boolean }>`
  position: absolute;
  height: ${(props) => (props.hovering ? "120px" : "54px")};
  transition: height 0.2s linear;
  background: rgba(1, 1, 1, 0.8);
  bottom: 12.5px;
  width: calc(100% - 20px);
  border-radius: 0px 0px 10px 10px;
  overflow: hidden;
`;
export const AssetCardName = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
`;
export const AssetCardButtonContainer = styled.div`
  padding-top: 10px;
  width: 20%;
  margin: auto;
`;
