import {
  RELOAD,
} from "../actions/Reload.actions";

export interface ReloadState {
  reload: boolean;
}

const reloadDefaultState: ReloadState = {
  reload: false,
};

export function reload(state = reloadDefaultState, action: any): ReloadState {
  switch (action.type) {
    case RELOAD:
        return {
            reload: !state.reload,
        };
    default:
      return state;
  }
}
