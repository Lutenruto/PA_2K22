import { AssetCard } from "app/App.components/AssetCard/AssetCard.controller";
import { Button } from "app/App.components/Button/Button.view";
import { printPartialAddress } from "utils";

import {
  ProfileAddress,
  ProfileAssetsContainer,
  ProfileFirstLine,
  ProfileNotConnected,
  ProfileNotConnectedFirstLine,
  ProfileNotConnectedSecondLine,
  ProfileSeparator,
  ProfileStyled,
} from "./Profile.style";

interface ProfileViewProps {
  assets: any;
  wallet: any;
  connectWallet: () => void;
}
export const ProfileView = ({
  assets,
  wallet,
  connectWallet,
}: ProfileViewProps) => {
  return (
    <ProfileStyled>
      {wallet.address !== "" && (
        <>
          <ProfileFirstLine>
            <ProfileAddress>
              {printPartialAddress(wallet.address)}
            </ProfileAddress>
            <ProfileSeparator src="/images/separator.svg" alt="" />
          </ProfileFirstLine>
          <ProfileAssetsContainer>
            {assets.map((asset: any, key: number) => {
              return <AssetCard nftData={asset} key={key} />;
            })}
          </ProfileAssetsContainer>
        </>
      )}
      {wallet.address === "" && (
        <ProfileNotConnected>
          <ProfileNotConnectedFirstLine>
            You're not connected, please connect to access this page
          </ProfileNotConnectedFirstLine>
          <ProfileNotConnectedSecondLine>
            <Button appearance="primary" clickCallback={() => connectWallet()}>
              Connect wallet
            </Button>
          </ProfileNotConnectedSecondLine>
        </ProfileNotConnected>
      )}
    </ProfileStyled>
  );
};
