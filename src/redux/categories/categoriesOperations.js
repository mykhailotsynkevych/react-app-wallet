import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi, addCategoriesApi, deleteCategoriesApi } from "../../utils/api/mockapi";

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

  export const addCategories = createAsyncThunk(
    "addCategories",
    async (category, { rejectWithValue }) => {
      try {
        const newCategory = await addCategoriesApi(category);
        return newCategory;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const deleteCategories = createAsyncThunk(
    'deleteCategories',
    async (id, { rejectWithValue }) => {
      try {
        await deleteCategoriesApi (id);
        return id;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );