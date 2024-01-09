import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi, addCategoriesApi, deleteCategoriesApi} from "../../utils/api/firebase";

export const getCategories = createAsyncThunk(
  "getCategories",
  async (_, thunkApi) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = thunkApi.getState();

    try {
      const categories = await getCategoriesApi({ localId, idToken });
      return categories;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCategories = createAsyncThunk(
  "addCategories",
  async (category, { rejectWithValue, getState }) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = getState();
    try {
      const newCategory = await addCategoriesApi({category, localId, idToken});
      return newCategory;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "deleteCategories",
  async (id, { rejectWithValue, getState }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;

    try {
      await deleteCategoriesApi({id, localId, idToken });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
