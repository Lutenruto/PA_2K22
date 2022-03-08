import { GifsStyled, GifsContainer } from "./Gifs.style";
import { GifItem } from "./GifItem/GifItem.controller";
import { checkGifLink } from "utils";
import { Loader } from "app/App.components/Loader/Loader.view";
interface GifsProps {
  gifList: any;
  loading: boolean;
}
export const GifsView = ({ gifList, loading }: GifsProps) => {
  return (
    <GifsStyled>
      {!loading && (
        <GifsContainer>
          {gifList.length === 0 && "No gifs to display"}
          {gifList
            .filter((gifItem: any) => {
              return checkGifLink(gifItem.gifLink);
            })
            .map((gifItem: any, key: number) => {
              return (
                <GifItem
                  link={gifItem.gifLink}
                  uploader={gifItem.userAddress}
                  upVoters={gifItem.upVoters}
                  downVoters={gifItem.downVoters}
                  key={key}
                ></GifItem>
              );
            })}
        </GifsContainer>
      )}
      {loading && <Loader />}
    </GifsStyled>
  );
};
