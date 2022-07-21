import { connectWallet, logout } from 'actions/Wallet.actions'
// prettier-ignore
import * as React from 'react'
import { useDispatch } from 'react-redux'

import { MenuView } from './Menu.view'

export const Menu = () => {
  const dispatch = useDispatch()

  const connectWalletCb = () => {
    dispatch(connectWallet())
  }

  const logoutCallback = () => {
    dispatch(logout())
  }

  return <MenuView connectWallet={connectWalletCb} walletLogout={logoutCallback} />
}
