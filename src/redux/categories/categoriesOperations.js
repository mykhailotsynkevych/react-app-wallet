import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesApi, addCategoriesApi, deleteCategoriesApi} from "../../utils/api/firebase";
import { errorHandler } from "../error/errorHandler";

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
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: getCategories }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCategories = createAsyncThunk(
  "addCategories",
  async (category, { rejectWithValue, getState, dispatch }) => {
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
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addCategories(category) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "deleteCategories",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;

    try {
      await deleteCategoriesApi({id, localId, idToken });
      return id;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => deleteCategories(id) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
