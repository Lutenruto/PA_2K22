import { Button } from "../Button/Button.view";
import {
  NotConnectedFirstLine,
  NotConnectedSecondLine,
  NotConnectedStyled,
} from "./NotConnected.style";

interface NotConnectedViewProps {
  connectWallet: () => void;
}
export const NotConnectedView = ({ connectWallet }: NotConnectedViewProps) => {
  return (
    <NotConnectedStyled>
      <NotConnectedFirstLine>
        You're not connected, please connect to access this page
      </NotConnectedFirstLine>
      <NotConnectedSecondLine>
        <Button appearance="primary" clickCallback={() => connectWallet()}>
          Connect wallet
        </Button>
      </NotConnectedSecondLine>
    </NotConnectedStyled>
  );
};
