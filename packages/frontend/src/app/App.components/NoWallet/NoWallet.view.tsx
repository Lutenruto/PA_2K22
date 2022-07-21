import { Button } from "../Button/Button.view";
import {
  NoWalletContainer,
  NoWalletPhrase,
  NoWalletButtoncontainer,
} from "./NoWallet.style";

export const NoWallet = () => {
  return (
    <NoWalletContainer>
      <NoWalletPhrase>
        You don't have the phantom wallet installed
      </NoWalletPhrase>
      <NoWalletButtoncontainer>
        <Button
          appearance="primary"
          clickCallback={() =>
            window.open("https://phantom.app/download", "_blank")
          }
        >
          Get it now !
        </Button>
      </NoWalletButtoncontainer>
    </NoWalletContainer>
  );
};
