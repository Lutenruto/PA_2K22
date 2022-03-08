/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import callProgram from 'hooks/call.program';
import * as React from "react";
import { GifItemView } from "./GifItem.view";

interface GifItemProps {
  link: string;
  uploader: string;
  upVoters: [];
  downVoters: [];
}
export const GifItem = ({
  link,
  uploader,
  upVoters,
  downVoters,
}: GifItemProps) => {
  console.log(link, uploader, upVoters, downVoters);
  const program = callProgram();

  const vote = async (link: string, uploader: string, direction: string) => {
    await program.voteGif(link, uploader, direction);
  };

  const tip = (link: string, uploader: string) => {
    // Function still under development
  };

  return (
    <GifItemView
      link={link}
      uploader={uploader}
      upVoters={upVoters}
      downVoters={downVoters}
      vote={vote}
      tip={tip}
    />
  );
};
