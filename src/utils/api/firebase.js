import axios from "axios";

const API_KEY = "AIzaSyCc9vvOCsgpi2oaPMfF1wsRQPqAHlw_iak";

const url = {
    AUTH: "https://identitytoolkit.googleapis.com/v1/",
    // DB: "https://bc-20-21-default-rtdb.firebaseio.com",
  };

  const setBaseUrl = (url) => (axios.defaults.baseURL = url);

//USER
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

export const registerUserApi = (userData) => {
    setBaseUrl(url.AUTH);
    return axios
      .post(
        "/accounts:signUp",
        { ...userData, returnSecureToken: true },
        {
          params: {
            key: API_KEY,
          },
        }
      )
      .then(({ data }) => {
        const { expiresIn, kind, ...postedUserData } = data;
        return postedUserData;
      });
  };

  export const loginUserApi = (userData) => {
    setBaseUrl(url.AUTH);
    return axios
      .post(
        "/accounts:signInWithPassword",
        {
          ...userData,
          returnSecureToken: true,
        },
        {
          params: {
            key: API_KEY,
          },
        }
      )
      .then(({ data }) => {
        const { idToken, email, refreshToken, localId } = data;
        return { idToken, email, refreshToken, localId };
      });
  };