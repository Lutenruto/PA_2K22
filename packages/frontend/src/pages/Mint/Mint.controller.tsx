import callProgram from "hooks/call.program";
import { useSelector } from "react-redux";
// prettier-ignore
import { State } from 'reducers';

import { MintView } from "./Mint.view";

export const Mint = () => {
  const program = callProgram();
  const wallet = useSelector((state: State) => state.wallet);
  return <MintView wallet={wallet} />;
};
