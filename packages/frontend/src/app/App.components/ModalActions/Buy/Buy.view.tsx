import { Button } from "../../Button/Button.view";
import { BuyFirstLine, BuySecondLine, BuyStyled } from "./Buy.style";

interface BuyViewProps {
  connectWallet: () => void;
}
export const BuyView = ({ connectWallet }: BuyViewProps) => {
  return (
    <BuyStyled>
      <BuyFirstLine>
        You're not connected, please connect to access this page
      </BuyFirstLine>
      <BuySecondLine>
        <Button appearance="primary" clickCallback={() => connectWallet()}>
          Connect wallet
        </Button>
      </BuySecondLine>
    </BuyStyled>
  );
};
