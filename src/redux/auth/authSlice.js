import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, getCurUser, refreshToken } from "./authOperations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      localId: null,
    },
    idToken: null,
    refreshToken: null,
    isLoding: false,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.user = {
        email: null,
        localId: null,
      };
      state.refreshToken = null;
      state.idToken = null;
      state.isLoding = false;
      state.error = null;
    },
  },
  extraReducers: {
    //register
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { idToken, refreshToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
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
      const { idToken, refreshToken, ...rest } = payload;
      state.isLoding = false;
      state.user = rest;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
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
    //refreshToken
    [refreshToken.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [refreshToken.fulfilled]: (state, { payload }) => {
      const { idToken, localId, refreshToken } = payload;
      state.isLoading = false;
      state.idToken = idToken;
      state.refreshToken = refreshToken;
      state.user = { ...state.user, localId };
    },
    [refreshToken.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  }
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;