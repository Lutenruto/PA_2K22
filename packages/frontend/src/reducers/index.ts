import { combineReducers } from "redux";

import { loading, LoadingState } from "./loading";
import { ModalState, modal } from "./modal";
import { progressBar, ProgressBarState } from "./progressBar";
import { ReloadState, reload } from "./reload";
import { toaster, ToasterState } from "./toaster";
import { WalletState, wallet } from "./wallet";

export const reducers = combineReducers({
  loading,
  progressBar,
  toaster,
  wallet,
  modal,
  reload
});

export interface State {
  loading: LoadingState;
  progressBar: ProgressBarState;
  toaster: ToasterState;
  wallet: WalletState;
  modal: ModalState;
  reload: ReloadState;
}
