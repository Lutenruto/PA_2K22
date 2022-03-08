/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useEffect, useRef } from 'react'

import {
  DisableBody,
  ModalBody,
  ModalContainer,
  ModalCross,
  ModalFirstLineContainer,
  ModalImg,
  ModalImgContainer,
  ModalStyled,
  ModalTitle,
} from './Modal.style'

type ModalViewProps = {
  showing: boolean
  title: string
  children?: JSX.Element
  closeCallback: () => void
  image?: string
}

export const ModalView = ({ showing, title, children, closeCallback, image }: ModalViewProps) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeCallback()
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useEffect(() => {
    document.addEventListener('keydown', closeCallback, false)

    return () => {
      document.removeEventListener('keydown', closeCallback, false)
    }
  }, [])

  return (
    <ModalStyled className={showing ? 'showing' : 'hidden'}>
      {showing && <DisableBody />}
      <ModalBody ref={wrapperRef}>
        {image !== undefined && (
          <ModalImgContainer>
            <ModalImg src={image} alt=""></ModalImg>
          </ModalImgContainer>
        )}
        <ModalContainer hasImage={image !== undefined}>
          <ModalCross
            onClick={() => {
              closeCallback()
            }}
          >
            <svg width={14} height={14}>
              <use xlinkHref="/images/sprites.svg#cross" />
            </svg>
          </ModalCross>
          <ModalFirstLineContainer>
            <ModalTitle>{title}</ModalTitle>
          </ModalFirstLineContainer>
          {children ? children : <div></div>}
        </ModalContainer>
      </ModalBody>
    </ModalStyled>
  )
}
