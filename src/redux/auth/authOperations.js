import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  registerUserApi,
} from "../../utils/api/firebase";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const postedUserData = await registerUserApi(userData);
      return postedUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const postedUserData = await loginUserApi(userData);
      return postedUserData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
