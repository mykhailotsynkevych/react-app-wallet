import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const url = {
  AUTH: "https://identitytoolkit.googleapis.com/v1/",
  DB: "https://react-app-wallet-af308-default-rtdb.firebaseio.com/",
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

//USER CATEGORIES
// https://firebase.google.com/docs/database/rest/auth?authuser=0#authenticate_with_an_id_token

export const getCategoriesApi = async ({ localId, idToken }) => {
  setBaseUrl(url.DB);
  const { data } = await axios.get(`/users/${localId}/categories.json`, {
    params: {
      auth: idToken,
    },
  });
  return data
    ? Object.entries(data).map(([id, category]) => ({ id, ...category }))
    : [];
};

export const addCategoriesApi = async ({ category, localId, idToken }) => {
  const response = await axios.post(
    `/users/${localId}/categories.json`,
    category,
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
