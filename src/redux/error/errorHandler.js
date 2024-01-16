import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, cb }) =>
  (dispatch) => {
    if (error.request.status === 400 || error.request.status === 401) {
      dispatch(refreshToken(cb));
    }
  };