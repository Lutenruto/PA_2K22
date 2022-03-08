import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
  faCopy,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "app/App.components/Button/Button.view";

import { GifContainer, GifUploader, GifImg, GifActions } from "./GifItem.style";

interface GifItemProps {
  link: string;
  uploader: string;
  upVoters: [];
  downVoters: [];
  vote: (link: string, uploader: string, direction: string) => void;
  tip: (link: string, uploader: string) => void;
}
export const GifItemView = ({
  link,
  uploader,
  upVoters,
  downVoters,
  vote,
  tip,
}: GifItemProps) => {
  return (
    <GifContainer>
      <div className="gif">
        <GifImg src={link} alt="" />
      </div>
      <div className="gif-infos">
        <GifUploader>
          {`${uploader.substr(0, 10)}...${uploader.substr(
            uploader.length - 10,
            uploader.length
          )}`}
          &nbsp;&nbsp;
          <Button
            appearance="primary"
            width="50px"
            clickCallback={() => navigator.clipboard.writeText(uploader)}
          >
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </GifUploader>
      </div>
      <GifActions>
        <Button
          appearance="primary"
          clickCallback={() => {
            vote(link, uploader, "up");
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleUp} /> ({upVoters.length})
        </Button>
        <Button
          appearance="primary"
          clickCallback={() => {
            vote(link, uploader, "down");
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleDown} /> ({downVoters.length})
        </Button>
        <Button
          appearance="primary"
          clickCallback={() => {
            tip(link, uploader);
          }}
        >
          <img src="images/solana_logo.png" alt="Solana logo" width="15" />
        </Button>
      </GifActions>
    </GifContainer>
  );
};
