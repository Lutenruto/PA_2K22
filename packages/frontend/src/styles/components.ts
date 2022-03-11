import styled from "styled-components/macro";
import { containerColor } from "styles";

export const Page = styled.div`
  margin: auto;
  padding: 80px;
  /* max-width: calc(100vw - 40px); */
  width: 100%;
  position: relative;
  background-color: ${containerColor};
  min-height: 100vh;

  @media (max-width: 1023px) {
    padding: 80px 40px;
  }

  @media (max-width: 767px) {
    padding: 80px 20px;
  }
`;

export const MainLogo = styled.img`
  display: block;
  margin: 30px auto;
`;

export const Card = styled.div<{ widthOverride?: string }>`
  display: block;
  margin: auto;
  padding: 50px;
  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(235, 236, 240, 0.2) 0%,
    rgba(235, 236, 240, 0.0447917) 77.08%,
    rgba(235, 236, 240, 0) 100%
  );
  backdrop-filter: blur(14px);
  border-radius: 40px;
  width: ${(props) => props.widthOverride || "650px"};

  border: 2px solid;
  border-image-source: radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #ffffff 0%,
      rgba(18, 30, 52, 0) 100%
    );

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SolanaCard = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(96, 122, 212, 1) 0%,
    rgba(53, 161, 180, 1) 50%,
    rgba(2, 207, 142, 1) 100%
  );
  width: 100%;
`;


export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 50px) 30px;
  grid-gap: 20px;
  justify-content: center;
  background: black;
  padding: 10px;
  border-radius: 5px;
  width: fit-content;
`;
export const InputStyled = styled.input`
  height: 30px;
  background: #232327;
  border: 0;
  border-radius: 5px;
  padding: 5px 10px;

  &&::placeholder {
    font-family: "Raleway";
    color: gray;
  }
`;
export const InputImg = styled.img`
  width: 100%;
`;