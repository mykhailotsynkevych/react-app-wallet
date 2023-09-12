import axios from 'axios';

axios.defaults.baseURL = 'https://64ff2792f8b9eeca9e29b497.mockapi.io';

export const getCategoriesApi = async () => {
  const response = await axios.get(
    '/categories'
  );
  return response.data;
};