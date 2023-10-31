import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  addTransactions,
  deleteTransactions,
  editTransactions,
} from "./transactionsOperations";

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
  extraReducers: {
    //get
    [getTransactions.pending]: handlePending,
    [getTransactions.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.transactions = payload;
    },
    [getTransactions.rejected]: handleRejected,

    //add
    [addTransactions.pending]: handlePending,
    [addTransactions.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.transactions.push(payload);
    },
    [addTransactions.rejected]: handleRejected,

    //delete
    [deleteTransactions.pending]: handlePending,
    [deleteTransactions.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      const index = state.transactions.findIndex(
        (task) => task.id === payload.id
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransactions.rejected]: handleRejected,

    //edit
    [editTransactions.pending]: handlePending,
    [editTransactions.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.transactions = state.transactions.map((el) =>
      el.id !== payload.id ? el : { ...payload }
    );
    },
    [editTransactions.rejected]: handleRejected,
  },
});

export default transactionsSlice.reducer;
