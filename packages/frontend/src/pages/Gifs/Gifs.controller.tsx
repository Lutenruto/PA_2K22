/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import callProgram from 'hooks/call.program';
import * as React from "react";
import { useEffect, useState } from "react";
import { GifsView } from "./Gifs.view";

export const Gifs = () => {
  const program = callProgram();

  const [gifList, setGifList] = useState([] as any);
  const [loading, setLoading] = useState(true);

  const getGifs = () => {
    program.getGifList().then((gifListRes) => {
      setGifList(gifListRes);
      setLoading(false);
    });
  };

  useEffect(() => {
    getGifs();
  }, []);
  return <GifsView gifList={gifList} loading={loading} getGifs={getGifs} />;
};
