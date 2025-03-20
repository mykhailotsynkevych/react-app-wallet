import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "AIzaSyCc9vvOCsgpi2oaPMfF1wsRQPqAHlw_iak";

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://react-app-wallet-af308-default-rtdb.firebaseio.com/",
  REFRESH_TOKEN: "https://identitytoolkit.googleapis.com/v1"
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

//USER
// https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password

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

//REFRESH USER
//when the token is no longer valid, then the function automatically updates the token
//https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-refresh-token

export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(url.REFRESH_TOKEN);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data }) => ({
      refreshToken: data.refresh_token,
      idToken: data.id_token,
      localId: data.user_id,
    }));
};

//USER CATEGORIES
// https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token

export const getCategoriesApi = async ({filter, localId, idToken }) => {
  setBaseUrl(url.DB);

  // console.log(filter, localId, idToken)

  const { data } = await axios.get(`/users/${localId}/categories/${filter}.json`, {
    params: {
      auth: idToken,
    },
  });
  
  return data
    ? Object.entries(data).map(([id, category]) => ({ id, ...category }))
    : [];
};

export const addCategoriesApi = async ({ category, localId, idToken }) => {
  const { transaction, nameCategory } = category;
  const response = await axios.post(
    `/users/${localId}/categories/${transaction}.json`,
    {nameCategory: nameCategory},
    {
      params: {
        auth: idToken,
      },
    }
  );
  const id = response.data.name;
  return { ...category, id };
};

export const deleteCategoriesApi = async ({ id, localId, idToken }) => {
  setBaseUrl(url.DB);
  await axios.delete(`/users/${localId}/categories/${id}.json`, {
    params: {
      auth: idToken,
    },
  });

  return id;
};

//USER TRANSACTIONS
// https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token

export const getTransactionsApi = async ({ localId, idToken }) => {
  setBaseUrl(url.DB);
  const { data } = await axios.get(`/users/${localId}/transactions.json`, {
    params: {
      auth: idToken,
    },
  });
  return data
    ? Object.entries(data).map(([id, transactions]) => ({
        id,
        ...transactions,
      }))
    : [];
};

export const addTransactionsApi = async ({
  transactionEl,
  localId,
  idToken,
}) => {
  setBaseUrl(url.DB);
  const response = await axios.post(
    `/users/${localId}/transactions.json`,
    transactionEl,
    {
      params: {
        auth: idToken,
      },
    }
  );
  const id = response.data.name;
  return { ...transactionEl, id };
};

export const deleteTransactionsApi = async ({ id, localId, idToken }) => {
  setBaseUrl(url.DB);
  await axios.delete(`/users/${localId}/transactions/${id}.json`, {
    params: {
      auth: idToken,
    },
  });

  return id;
};

export const editTransactionsApi = async ({
  transactionEl,
  localId,
  idToken,
}) => {
  const response = await axios.put(
    `/users/${localId}/transactions/${transactionEl.id}.json`,
    {
      ...transactionEl,
    },
    {
      params: {
        auth: idToken,
      },
    }
  );
  return response.data;
};

//BALANCE
// https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token

export const getBalanceApi = async ({ localId, idToken }) => {
  setBaseUrl(url.DB);
  const { data } = await axios.get(`/users/${localId}/name.json`, {
    params: {
      auth: idToken,
    },
  });
  return data;
};

export const editBalanceApi = async ({
  newBalance,
  localId,
  idToken,
}) => {
  const response = await axios.put(
    `/users/${localId}/balance.json`,
    newBalance,
    {
      params: {
        auth: idToken,
      },
    }
  );

  return response.data;
};