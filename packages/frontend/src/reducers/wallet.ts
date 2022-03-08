import Web3 from "web3";

import {
  LOGOUT,
  SET_ADDRESS,
  SET_CURRENCYAMOUNT,
  SET_WEB3,
} from "../actions/Wallet.actions";

export interface WalletState {
  address: string;
  currencyAmount: number;
  web3?: Web3;
  provider?: any;
}

const walletDefaultState: WalletState = {
  address: "",
  currencyAmount: 0,
  web3: undefined,
  provider: undefined,
};

export function wallet(state = walletDefaultState, action: any): WalletState {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case SET_CURRENCYAMOUNT:
      return {
        ...state,
        currencyAmount: action.currencyAmount,
      };
    case SET_WEB3:
      if (action.address !== undefined) {
        return {
          address: action.address,
          currencyAmount: action.currencyAmount,
          web3: action.web3,
          provider: action.provider,
        };
      } else {
        return {
          ...state,
          web3: action.web3,
        };
      }
    case LOGOUT:
      return {
        web3: undefined,
        currencyAmount: 0,
        address: "",
      };
    default:
      return state;
  }
}
