import { backgroundTextColor } from '../../../../styles'
import styled, { css } from 'styled-components/macro'

export const HamburgerStyled = styled.div`
  position: absolute;
  right: 13px;
  top: 23px;
  width: 50px;
  height: 50px;
  overflow: visible;
  box-sizing: content-box;
  cursor: pointer;
  z-index: 11;
  display: none;

  &:before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-left: -53px;
    margin-top: -11px;
    z-index: -2;
    background-blend-mode: soft-light, normal;
    box-sizing: border-box;
    border-radius: 40px;
  }

  @media (max-width: 767px) {
    display: block;
  }
`

export const HamburgerBox = styled.div`
  position: absolute;
  top: 7px;
  right: 12px;
  display: block;
  width: 24px;
  height: 24px;
`

export const HamburgerInner = styled.div`
  position: absolute;
  width: 24px;
  height: 1.5px;
  border-radius: 1px;
  will-change: transform;
  background-color: ${backgroundTextColor};
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
`

export const HamburgerInnerTop = styled(HamburgerInner)<{ showing: boolean }>`
  top: 2px;
  ${(props) =>
    props.showing &&
    css`
      transform: translate3d(0px, 9px, 0) rotate(-45deg);
    `};
`

export const HamburgerInnerMiddle = styled(HamburgerInner)<{ showing: boolean }>`
  display: block;
  top: calc(50% - 1px);
  ${(props) =>
    props.showing &&
    css`
      display: none;
    `};
`

export const HamburgerInnerBottom = styled(HamburgerInner)<{ showing: boolean }>`
  bottom: 3px;
  ${(props) =>
    props.showing &&
    css`
      transform: translate3d(0px, -9px, 0) rotate(45deg);
    `};
`
