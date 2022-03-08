import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const MenuStyled = styled.div`
  font-size: 16px;
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 0 100px;
  z-index: 5;
  background: #212125;

  @media (max-width: 1023px) {
    padding: 0 0;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`;

export const MenuBar = styled.div<{
  showing: boolean;
  logged: boolean;
}>`
  margin: 0 auto;
  text-align: center;
  height: 80px;
  z-index: 1;
  display: grid;
  grid-template-columns: ${(props) =>
    props.logged
      ? "auto repeat(5, fit-content(100px))"
      : "auto repeat(3, fit-content(100px)) 10px"};
  grid-gap: 32px;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  box-sizing: border-box;

  align-items: center;
  > a {
    font-family: "Raleway", sans-serif;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #f8fafc;
    > img {
      margin: 22px 0;
    }
  }

  @media (max-width: 1023px) {
    button {
      width: fit-content;
      padding: 0 20px;
      margin: 0;
      font-family: "Raleway", sans-serif;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
    }
  }

  @media (max-width: 767px) {
    a:nth-child(1) {
      display: block;
    }
    height: ${(props) => (props.showing ? "400px" : "80px")};
    grid-template-columns: auto;
    grid-template-rows: 80px 0 repeat(6, 50px);
    transition: height 500ms ease-in-out;
  }
`;

export const MenuLogo = styled.img`
  height: 40px;
  margin: 5px 0px 5px 10px;
  width: 215px;
  display: block;
`;
export const ConnectButton = styled.button`
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #f8fafc;

  border: 0;
  transform: skew(-21deg);
  background: linear-gradient(95.19deg, #4934c3 5.74%, #3ad8ed 100%);

  align-self: center;
  height: 48px;
  cursor: pointer;

  width: 100%;
  margin: auto;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ConnectButtonText = styled.div`
  transform: skew(21deg);
  padding: 0px 20px;
`;

export const ConnectedButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 37px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const WalletBalance = styled(Link)`
  font-family: "Raleway", sans-serif !important;
  color: #9542ff !important;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const WalletAddress = styled.a`
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px !important;
  color: #f8fafc;

  display: flex;
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const AddressImage = styled.img`
  margin: auto !important;
  padding-left: 10px;
`;

export const ProfileImage = styled.img`
  position: relative;

  @media (max-width: 767px) {
    display: none;
  }
`;
