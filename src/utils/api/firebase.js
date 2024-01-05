import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env)

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

  export const getCurUserApi = (idToken) => {
    setBaseUrl(url.AUTH);
    return axios
      .post(
        "/accounts:lookup",
        { idToken },
        {
          params: {
            key: API_KEY,
          },
        }
      )
      .then(({ data }) => {
        const { localId, email } = data.users[0];
        return { localId, email };
      });
  };