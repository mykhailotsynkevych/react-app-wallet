import { createSlice } from "@reduxjs/toolkit";
import { getTransactions, addTransactions, deleteTransactions } from "./transactionsOperations";

const handlePending = state => {
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
  reducers: {
    add(state, { payload }) {
      return {transactions: [...state.transactions, payload]}
    },
    remove(state, { payload }) {
      return {transactions: state.transactions.filter((transactionEl) => transactionEl.id !== payload)}
    },
    edit(state, { payload }) {
      state.transactions = state.transactions.map((el) => 
      el.id !== payload.id ? el : {...payload})
    }
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
        task => task.id === action.payload.id
      );
      state.transactions.splice(index, 1);
    },
    [deleteTransactions.rejected]: handleRejected,
  }
});

export const { add, remove, edit } = transactionsSlice.actions;
export default transactionsSlice.reducer;