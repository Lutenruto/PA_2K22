import styled, { createGlobalStyle } from "styled-components/macro";

export const DisableBody = createGlobalStyle`
  body{
    overflow: hidden;
  }
`;
export const ModalStyled = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);

  position: fixed;

  top: 0px;

  z-index: 11;
  &.showing {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1023px) {
    display: block;
    width: calc(100% - 60px);
  }

  @media (max-width: 320px) {
    display: block;
    width: calc(100% - 30px);
  }
`;

export const ModalImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 20px 57px;
  background: black;
  @media (max-width: 1023px) {
    display: none;
  }
  max-width: 500px;
`;
export const ModalImg = styled.img`
  width: 100%;
`;

export const ModalContainer = styled.div<{ hasImage: boolean }>`
  width: 500px;
  position: relative;
  padding: ${(props) =>
    props.hasImage ? "52px 30px 40px 30px" : "24px 30px 40px 30px"};
  background: linear-gradient(-135deg, transparent 30px, #232327 30px);

  @media (max-width: 1023px) {
    padding: 24px 20px;
    width: 100%;
  }
`;

export const ModalFirstLineContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.p`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #f8fafc;
  text-align: left;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const ModalCross = styled.span`
  position: absolute;
  top: 30px;
  right: 40px;
  cursor: pointer;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: #f8fafc;
  z-index: 5;
`;
