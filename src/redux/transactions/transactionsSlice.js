import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  addTransactions,
  deleteTransactions,
  editTransactions,
} from "./transactionsOperations";
import { logOut } from "../auth/authSlice";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    //get
    .addCase(getTransactions.pending, handlePending)
    .addCase(getTransactions.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.transactions = payload;
    })
    .addCase(getTransactions.rejected, handleRejected)

    //add
    .addCase(addTransactions.pending, handlePending)
    .addCase(addTransactions.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.transactions.push(payload);
    })
    .addCase(addTransactions.rejected, handleRejected)

    //delete
    .addCase(deleteTransactions.pending, handlePending)
    .addCase(deleteTransactions.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      const index = state.transactions.findIndex(
        (task) => task.id === payload.id
      );
      state.transactions.splice(index, 1);
    })
    .addCase(deleteTransactions.rejected, handleRejected)

    //edit
    .addCase(editTransactions.pending, handlePending)
    .addCase(editTransactions.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.transactions = state.transactions.map((el) =>
      el.id !== payload.id ? el : { ...payload }
    );
    })
    .addCase(editTransactions.rejected, handleRejected)
  },
    //user logout
    [logOut]: ({state}) => {
      state.transactions = [];
      state.isLoading = false;
      state.error = null;
    },
});

export default transactionsSlice.reducer;
