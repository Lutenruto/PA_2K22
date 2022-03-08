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
