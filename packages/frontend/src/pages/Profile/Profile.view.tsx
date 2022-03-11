import { AssetCard } from "app/App.components/AssetCard/AssetCard.controller";
import { NotConnected } from "app/App.components/NotConnected/NotConnected.controller";
import { printPartialAddress } from "utils";

import {
  ProfileAddress,
  ProfileAssetsContainer,
  ProfileFirstLine,
  ProfileSeparator,
  ProfileStyled,
} from "./Profile.style";

interface ProfileViewProps {
  assets: any;
  wallet: any;
}
export const ProfileView = ({ assets, wallet }: ProfileViewProps) => {
  if (wallet.address === "") {
    return <NotConnected />;
  }
  return (
    <ProfileStyled>
      <ProfileFirstLine>
        <ProfileAddress>{printPartialAddress(wallet.address)}</ProfileAddress>
        <ProfileSeparator src="/images/separator.svg" alt="" />
      </ProfileFirstLine>
      <ProfileAssetsContainer>
        {assets.map((asset: any, key: number) => {
          return <AssetCard nftData={asset} key={key} />;
        })}
      </ProfileAssetsContainer>
    </ProfileStyled>
  );
};
