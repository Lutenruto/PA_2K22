import styled, { css } from "styled-components/macro";

export const ButtonStyled = styled.span<{
  appearance: string;
  width?: string;
  fontSize?: number;
  lineHeight?: number;
  padding?: number;
  margin?: boolean;
}>`
  ${(props) => {
    let backgroundColor = "#0023FF";
    let textColor = "#F7F9FD";
    let border = "";
    let borderImage = "";
    switch (props.appearance) {
      case "primary":
        backgroundColor =
          "linear-gradient(95.19deg, #4934C3 5.74%, #3AD8ED 100%)";
        textColor = "#F7F9FD";
        props.lineHeight = 28;
        break;
      case "primary_empty":
        backgroundColor = "#101010";
        textColor = "#F7F9FD";
        border = "2px solid";
        borderImage = "linear-gradient(95.19deg, #4934C3 5.74%, #3AD8ED) 1";
        break;
      case "primary_empty_gray":
        backgroundColor = "#232327";
        textColor = "#F7F9FD";
        border = "2px solid";
        borderImage = "linear-gradient(95.19deg, #4934C3 5.74%, #3AD8ED) 1";
        break;
      case "orange_empty":
        backgroundColor = "#101010";
        textColor = "#F7F9FD";
        border = "2px solid";
        borderImage =
          "linear-gradient(95.79deg, #E72C2C 4.22%, #EFCB4A 102.88%) 1";
        break;
      case "gray_empty":
        backgroundColor = "#101010";
        textColor = "#F7F9FD";
        border = "2px solid #61616B;";
        break;
      case "secondary":
        backgroundColor = "#101010";
        textColor = "white";
        border = "2px solid #9443FF";
        break;
      case "tertiary":
        backgroundColor = "#EFCB4A";
        textColor = "black";
        border = "2px solid rgba(0,0,0,0)";
        break;
      default:
        backgroundColor = "#0023FF";
        textColor = "#F7F9FD";
        border = "2px solid rgba(0,0,0,0)";
    }
    return css`
      border: ${border};
      border-image: ${borderImage};
      background: ${backgroundColor};
      color: ${textColor};
      svg {
        fill: ${textColor};
      }
    `;
  }}

  ${(props) =>
    props.width
      ? `width: ${props.width};`
      : `max-width: 260px;min-width: 220px;`}
  max-width: 90vw;
  box-sizing: border-box;

  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : `16`)}px;
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}` : `24`}px;
  padding: ${(props) => (props.padding ? `${props.padding}` : `12`)}px 0;
  font-weight: 600;
  display: block;

  cursor: pointer;
  margin: ${(props) => (props.margin ? "0 30px" : "")};
  transform: skew(-21deg);
  > svg {
    margin: 11px 0;
    width: 24px;
    height: 24px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const ButtonInside = styled.div<{
  appearance: string;
  position?: string;
}>`
  position: ${(props) => (props.position ? props.position : "relative")};
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    transform: skew(21deg);
  }
`;
