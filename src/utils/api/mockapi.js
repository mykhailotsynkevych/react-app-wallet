import axios from "axios";

axios.defaults.baseURL = "https://64ff2792f8b9eeca9e29b497.mockapi.io";

//categories
export const getCategoriesApi = async () => {
  const response = await axios.get("/categories");
  return response.data;
};

export const addCategoriesApi = async (category) => {
  const response = await axios.post("/categories", category);
  return response.data;
};

export const deleteCategoriesApi = async id  => {
  await axios.delete(`/categories/${id}`);

  return id;
};

//transactions
export const getTransactionsApi = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};

export const addTransactionsApi = async (transactionEl) => {
  const response = await axios.post("/transactions", transactionEl);
  return response.data;
};

export const deleteTransactionsApi = async id  => {
  await axios.delete(`/transactions/${id}`);

  return id;
};