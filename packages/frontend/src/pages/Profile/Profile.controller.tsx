/* eslint-disable react-hooks/exhaustive-deps */
// prettier-ignore
import callProgram from 'hooks/call.program';
import * as React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "reducers";

import { ProfileView } from "./Profile.view";

export const Profile = () => {
  const program = callProgram();
  const wallet = useSelector((state: State) => state.wallet);
  const [assets, setAssets] = useState<any>([]);
  const getAssets = async () => {
    const res = await program.getNfts(wallet.address);
    if (res.length > 0) {
      setAssets(res);
    }
  };

  useEffect(() => {
    getAssets();
  }, [wallet]);
  return <ProfileView assets={assets} wallet={wallet} />;
};
