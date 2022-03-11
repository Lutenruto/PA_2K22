import { Button } from "app/App.components/Button/Button.view";
import { NotConnected } from "app/App.components/NotConnected/NotConnected.controller";

import {
  MintForm,
  MintInput,
  MintLabel,
  MintRow,
  MintStyled,
} from "./Mint.style";

interface MintViewProps {
  wallet: any;
  mintNft: () => void;
}
export const MintView = ({ wallet, mintNft }: MintViewProps) => {
  if (wallet.address === "") {
    return <NotConnected />;
  }
  return (
    <MintStyled>
      <MintForm>
        <MintRow>
          <MintLabel>Image, Video, Audio...</MintLabel>
          <MintInput type="file" />
        </MintRow>
        <MintRow>
          <MintLabel>Name</MintLabel>
          <MintInput type="text" placeholder="My cool NFT" />
        </MintRow>
        <MintRow>
          <Button
            appearance="primary"
            clickCallback={() => {
              mintNft();
            }}
          >
            Create !
          </Button>
        </MintRow>
      </MintForm>
    </MintStyled>
  );
};
