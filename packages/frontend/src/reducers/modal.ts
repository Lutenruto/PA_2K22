import { HIDE_MODAL, SHOW_MODAL, UPDATE_MODAL, SHOW_MODAL_IMG } from '../app/App.components/Modal/Modal.actions'

export interface ModalState {
  showing: boolean
  title: string,
  children?: JSX.Element
  img?: string
}

const modalDefaultState: ModalState = {
  showing: false,
  title: '',
  children: undefined,
  img: undefined
}

export function modal(state = modalDefaultState, action: any): ModalState {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        showing: true,
        title: action.title,
        children: action.children
      }
    case HIDE_MODAL:
      return {
        ...state,
        showing: false,
      }
    case UPDATE_MODAL:
      return {
        ...state,
        title: action.title,
        children: action.children
      }
    case SHOW_MODAL_IMG:
      return {
        ...state,
        showing: true,
        title: action.title,
        children: action.children,
        img: action.img
      }
    default:
      return state
  }
}
