import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi } from "../../utils/api/mockapi";

export const getCategories = createAsyncThunk(
    'getCategories',
    async (_, thunkApi) => {
      try {
        const categories = await getCategoriesApi();
        return categories;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );