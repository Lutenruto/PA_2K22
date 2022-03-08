import * as React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { State } from 'reducers'

import { hideModal } from './Modal.actions'
import { ModalView } from './Modal.view'

export const Modal = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state: State) => state.modal)

  const closeCallback = () => {
    dispatch(hideModal())
  }

  return (
    <ModalView
      showing={modal.showing}
      title={modal.title}
      children={modal.children}
      image={modal.img}
      closeCallback={closeCallback}
    />
  )
}
