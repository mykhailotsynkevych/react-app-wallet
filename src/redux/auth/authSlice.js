import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  getCurUser,
  refreshToken,
} from "./authOperations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      email: null,
      localId: null,
    },
    idToken: null,
    refreshToken: null,
    isLoading: false,
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
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { idToken, refreshToken, ...rest } = payload;
        state.isLoading = false;
        state.user = rest;
        state.idToken = idToken;
        state.refreshToken = refreshToken;
      })
      .addCase(registerUser.rejected, handleRejected)
      //login
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { idToken, refreshToken, ...rest } = payload;
        state.isLoading = false;
        state.user = rest;
        state.idToken = idToken;
        state.refreshToken = refreshToken;
      })
      .addCase(loginUser.rejected, handleRejected)
      //curUser
      .addCase(getCurUser.pending, handlePending)
      .addCase(getCurUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = { ...state.user, ...payload };
      })
      .addCase(getCurUser.rejected, handleRejected)
      //refreshToken
      .addCase(refreshToken.pending, handlePending)
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { idToken, localId, refreshToken } = payload;
        state.isLoading = false;
        state.idToken = idToken;
        state.refreshToken = refreshToken;
        state.user = { ...state.user, localId };
      })
      .addCase(refreshToken.rejected, handleRejected);
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
