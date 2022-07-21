import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "app/App.components/Button/Button.view";
import { printPartialAddress } from "utils";

import {
  GifActions,
  GifActionsNotConnected,
  GifContainer,
  GifImg,
  GifUploader,
} from "./GifItem.style";

interface GifItemProps {
  link: string;
  uploader: string;
  upVoters: [];
  downVoters: [];
  vote: (link: string, uploader: string, direction: string) => void;
  tip: (link: string, uploader: string) => void;
  wallet: any;
  connectWallet: () => void;
}

export const GifItemView = ({
  link,
  uploader,
  upVoters,
  downVoters,
  vote,
  tip,
  wallet,
  connectWallet,
}: GifItemProps) => {
  let uploaderString = uploader.toString();
  return (
    <GifContainer>
      <div className="gif">
        <GifImg src={link} alt="" />
      </div>
      <div className="gif-infos">
        <GifUploader>
          {printPartialAddress(uploaderString)}
          <Button
            appearance="secondary"
            width="50px"
            clickCallback={() => navigator.clipboard.writeText(uploaderString)}
          >
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </GifUploader>
      </div>
      {wallet.address !== "" && (
        <GifActions>
          <Button
            appearance="secondary"
            clickCallback={() => {
              vote(link, uploader, "up");
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleUp} /> ({upVoters.length})
          </Button>
          <Button
            appearance="secondary"
            clickCallback={() => {
              vote(link, uploader, "down");
            }}
          >
            <FontAwesomeIcon icon={faArrowAltCircleDown} /> ({downVoters.length}
            )
          </Button>
          <Button
            appearance="secondary"
            clickCallback={() => {
              tip(link, uploader);
            }}
          >
            <img src="images/solana_logo.png" alt="Solana logo" width="15" />
          </Button>
        </GifActions>
      )}
      {wallet.address === "" && (
        <GifActionsNotConnected>
          <Button appearance="secondary" clickCallback={() => connectWallet()}>
            Connect Wallet
          </Button>
        </GifActionsNotConnected>
      )}
    </GifContainer>
  );
};
