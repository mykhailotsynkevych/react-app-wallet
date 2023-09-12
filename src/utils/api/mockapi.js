import axios from "axios";

axios.defaults.baseURL = "https://64ff2792f8b9eeca9e29b497.mockapi.io";

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