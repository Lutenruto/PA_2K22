import Web3 from "web3";

export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CURRENCYAMOUNT = "SET_CURRENCYAMOUNT";
export const SET_WEB3 = "SET_WEB3";
export const LOGOUT = "LOGOUT";

export const setAddress = (address: string) => (dispatch: any) => {
  dispatch({
    type: SET_ADDRESS,
    address,
  });
};

export const setCurrencyAmount =
  (currencyAmount: number) => (dispatch: any) => {
    dispatch({
      type: SET_CURRENCYAMOUNT,
      currencyAmount,
    });
  };

export const setWeb3 = (web3: Web3) => (dispatch: any) => {
  dispatch({
    type: SET_WEB3,
    web3,
  });
};

export const logout = () => async (dispatch: any) => {
  // TODO
};

export const connectWallet = () => async (dispatch: any) => {
  // TODO
};
