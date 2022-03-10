import styled from "styled-components/macro";

export const ProfileStyled = styled.div`
  margin: auto;
  width: 100%;
  position: relative;
  background-color: #000;
  min-height: 100vh;
  padding-top: 80px;
`;

export const ProfileFirstLine = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #45454d;
`;
export const ProfileAddress = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  padding: 20px;
`;
export const ProfileSeparator = styled.img``;

export const ProfileAssetsContainer = styled.div`
  padding: 40px 80px 80px 80px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  @media (max-width: 1023px) {
    padding: 40px 80px 40px 40px;
  }

  @media (max-width: 767px) {
    padding: 20px 80px 20px 20px;
  }
`;
