import { State } from 'reducers'

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const SHOW_MODAL_IMG = 'SHOW_MODAL_IMG'
export const UPDATE_MODAL = 'UPDATE_MODAL'

export const showModal = (title: string, children: JSX.Element) => (dispatch: any, getState: any) => {
  const state: State = getState()
  if (!state.modal.showing) {
    dispatch({
      type: SHOW_MODAL,
      title,
      children,
    })
  }
}

export const showModalImg = (title: string, children: JSX.Element, img: string) => (dispatch: any, getState: any) => {
  const state: State = getState()
  if (!state.modal.showing) {
    dispatch({
      type: SHOW_MODAL_IMG,
      title,
      children,
      img,
    })
  }
}

export const hideModal = () => (dispatch: any) => {
  dispatch({
    type: HIDE_MODAL,
  })
}

export const updateModal = (title: string, children: JSX.Element) => (dispatch: any) => {
  dispatch({
    type: UPDATE_MODAL,
    title,
    children,
  })
}
