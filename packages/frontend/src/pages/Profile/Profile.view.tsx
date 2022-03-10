import { ProfileStyled } from "./Profile.style";

interface ProfileViewProps {
  assets: any;
}
export const ProfileView = ({ assets }: ProfileViewProps) => {
  return <ProfileStyled>Profile page</ProfileStyled>;
};
