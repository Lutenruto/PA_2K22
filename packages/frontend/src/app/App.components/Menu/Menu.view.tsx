import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { State } from "reducers";

import { Hamburger } from "./Hamburger/Hamburger.view";
import {
  AddressImage,
  ConnectButton,
  ConnectButtonText,
  ConnectedButtonsContainer,
  MenuBar,
  MenuLogo,
  MenuStyled,
  ProfileImage,
  WalletAddress,
  WalletBalance,
} from "./Menu.style";

import { printPartialAddress, roundBalance } from "utils";
type MenuViewProps = {
  connectWallet: () => void;
  walletLogout: () => void;
};

export const MenuView = ({ connectWallet, walletLogout }: MenuViewProps) => {
  const wallet = useSelector((state: State) => state.wallet);

  const [showing, setShowing] = useState(false);

  let connectedComponents;
  if (wallet.address !== "") {
    connectedComponents = (
      <ConnectedButtonsContainer>
        <Link to="/profile" onClick={() => setShowing(false)}>
          <ProfileImage src="/images/profile.svg" alt="profile" />
        </Link>
      </ConnectedButtonsContainer>
    );
  } else {
    connectedComponents = (
      <ConnectButton
        onClick={() => {
          connectWallet();
        }}
      >
        <ConnectButtonText>Connect&nbsp;Wallet</ConnectButtonText>
      </ConnectButton>
    );
  }

  return (
    <MenuStyled>
      <Hamburger showing={showing} setShowing={() => setShowing(!showing)} />
      <MenuBar showing={showing} logged={wallet.address !== ""}>
        <Link to="/" onClick={() => setShowing(false)}>
          <MenuLogo alt="logo" src="/logo.png" />
        </Link>
        <Link to="/marketplace" onClick={() => setShowing(false)}>
          MARKETPLACE
        </Link>
        <Link to="/gifs" onClick={() => setShowing(false)}>
          GIFS
        </Link>
        <Link to="/mint" onClick={() => setShowing(false)}>
          CREATE
        </Link>
        {wallet.address !== "" && (
          <>
            <WalletBalance style={{ pointerEvents: "none" }} to="">
              {roundBalance(wallet.currencyAmount)}&nbsp;SOL
            </WalletBalance>
            <WalletAddress
              onClick={() => {
                navigator.clipboard.writeText(wallet.address);
              }}
            >
              {printPartialAddress(wallet.address)}
              <AddressImage alt="Address Logo" src="/images/address.svg" />
            </WalletAddress>
          </>
        )}
        {connectedComponents}
      </MenuBar>
    </MenuStyled>
  );
};
