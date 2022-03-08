import * as PropTypes from 'prop-types'
import * as React from 'react'

import { BUTTON, ButtonStyle, ButtonTypes, PRIMARY } from './Button.constants'
import { ButtonIcon, ButtonLoadingIcon, ButtonStyled, ButtonText } from './Button.style'

type ButtonViewProps = {
  text: string
  icon?: string
  kind?: ButtonStyle
  onClick?: () => void
  clickCallback: () => void
  clicked: boolean
  type?: ButtonTypes
  loading: boolean
}

export const ButtonView = ({ text, icon, kind, onClick, clickCallback, clicked, type, loading }: ButtonViewProps) => {
  let buttonClasses = kind
  if (clicked) buttonClasses += ' clicked'
  if (loading) buttonClasses += ' loading'
  return (
    <ButtonStyled
      className={buttonClasses}
      onClick={() => {
        clickCallback()
        onClick && onClick()
      }}
      type={type}
    >
      <ButtonText>
        {loading ? (
          <>
            <div>Loading...</div>
            <ButtonLoadingIcon className={kind}>
              <use xlinkHref="/icons/sprites.svg#loading" />
            </ButtonLoadingIcon>
          </>
        ) : (
          <>
            <div>{text}</div>
            {icon && (
              <ButtonIcon className={kind}>
                <use xlinkHref={`/icons/sprites.svg#${icon}`} />
              </ButtonIcon>
            )}
          </>
        )}
      </ButtonText>
    </ButtonStyled>
  )
}

ButtonView.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  kind: PropTypes.string,
  onClick: PropTypes.func,
  clickCallback: PropTypes.func.isRequired,
  clicked: PropTypes.bool.isRequired,
  type: PropTypes.string,
  loading: PropTypes.bool,
}

ButtonView.defaultProps = {
  icon: undefined,
  kind: PRIMARY,
  type: BUTTON,
  loading: false,
}
