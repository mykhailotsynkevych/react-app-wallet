import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurUserApi,
  loginUserApi,
  registerUserApi,
  refreshTokenApi
} from "../../utils/api/firebase";
import { errorHandler } from "../error/errorHandler";
import { logOut } from "./authSlice";

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

export const getCurUser = createAsyncThunk(
  "auth/getCurUser",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const { idToken } = getState().auth;
      const userData = await getCurUserApi(idToken);
      return userData;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: getCurUser }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (cb, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const data = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cb());
      }, 0);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(logOut());//if the token is not correct, we make logout
      }, 0);//asynchronously for: first logout and then write the error to state
      return rejectWithValue(error.message);
    }
  }
);
