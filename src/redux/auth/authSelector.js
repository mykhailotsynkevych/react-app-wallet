export const selectIsAuth = (state) => Boolean(state.auth.idToken);
export const selectCurUser = (state) =>
  state.auth.idToken && !state.auth.user.email;
