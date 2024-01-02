import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, getCurUser } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      refreshToken: null,
      localId: null,
    },
    idToken: null,
    isLoding: false,
    error: null,
  },
  extraReducers: {
    //register
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { idToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //login
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { idToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    //curUser
    [getCurUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = { ...state.user, ...payload };
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  }
});

export default authSlice.reducer;