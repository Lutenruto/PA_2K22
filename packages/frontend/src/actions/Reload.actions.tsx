export const RELOAD = false;

export const triggerReload = () => (dispatch: any) => {
  dispatch({
    type: RELOAD,
  });
};
