import { ReactNode } from 'react'
import { Style } from 'react-motion'

import { ButtonInside, ButtonStyled } from './Button.style'

export interface ButtonProps {
  appearance:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'primary_empty'
    | 'gray_empty'
    | 'orange_empty'
    | 'primary_empty_gray'
  width?: string
  position?: string
  children: ReactNode
  clickCallback?: () => void
  fontSize?: number
  lineHeight?: number
  padding?: number
  style?: Style
  margin?: boolean
}

export const Button = ({
  children,
  clickCallback = () => {},
  appearance,
  width,
  position,
  fontSize,
  lineHeight,
  padding,
  style,
  margin = true,
}: ButtonProps) => {
  return (
    <ButtonStyled
      onClick={() => clickCallback()}
      appearance={appearance}
      width={width}
      fontSize={fontSize}
      lineHeight={lineHeight}
      padding={padding}
      style={style}
      margin={margin}
    >
      <ButtonInside appearance={appearance} position={position}>
        <div>{children}</div>
      </ButtonInside>
    </ButtonStyled>
  )
}
