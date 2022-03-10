import { NotConnected } from "app/App.components/NotConnected/NotConnected.controller";
import { MintStyled } from "./Mint.style";

interface MintViewProps {
  wallet: any;
}
export const MintView = ({ wallet }: MintViewProps) => {
  if (wallet.address === "") {
    return <NotConnected />;
  }
  return <MintStyled>Mint page</MintStyled>;
};
