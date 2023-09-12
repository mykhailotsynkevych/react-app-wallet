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

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
    [getTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactions = action.payload;
    },
    [getTransactions.rejected]: handleRejected,

    //add
    [addTransactions.pending]: handlePending,
    [addTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactions.push(action.payload);
    },
    [addTransactions.rejected]: handleRejected,

    //delete
    [deleteTransactions.pending]: handlePending,
    [deleteTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.transactions.findIndex(
        (task) => task.id === action.payload.id
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransactions.rejected]: handleRejected,

    //edit
    [editTransactions.pending]: handlePending,
    [editTransactions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.transactions = state.transactions.map((el) =>
      el.id !== action.payload.id ? el : { ...action.payload }
    );
    },
    [editTransactions.rejected]: handleRejected,
  },
});

export default transactionsSlice.reducer;
