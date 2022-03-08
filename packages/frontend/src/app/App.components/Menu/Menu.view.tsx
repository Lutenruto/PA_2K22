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
  CustomNavbarButton,
  MenuBar,
  MenuLogo,
  MenuStyled,
  ProfileImage,
  WalletAddress,
  WalletBalance,
} from "./Menu.style";

type MenuViewProps = {
  connectWallet: () => void;
  walletLogout: () => void;
};

export const MenuView = ({ connectWallet, walletLogout }: MenuViewProps) => {
  const wallet = useSelector((state: State) => state.wallet);

  const [showing, setShowing] = useState(false);

  function printPartialAddress(address: String) {
    let length = address.length;
    return (
      address.substring(0, 4) + "..." + address.substring(length - 3, length)
    );
  }

  let connectedComponents;
  if (wallet.address !== "") {
    connectedComponents = (
      <ConnectedButtonsContainer>
        <CustomNavbarButton>
          <ProfileImage src="/images/profile.svg" alt="profile" />
        </CustomNavbarButton>
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
          <MenuLogo alt="logo" src="/logo.svg" />
        </Link>
        <div />
        <Link to="/marketplace" onClick={() => setShowing(false)}>
          MARKETPLACE
        </Link>
        {wallet.address !== "" && (
          <>
            <WalletBalance style={{ pointerEvents: "none" }} to="">
              {wallet.currencyAmount}&nbsp;SOL
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
