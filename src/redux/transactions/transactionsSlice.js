import { createSlice } from "@reduxjs/toolkit";

const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
  },
  reducers: {
    add(state, { payload }) {
      return {transactions: [...state.transactions, payload]}
    },
    remove(state, { payload }) {
      return {transactions: state.transactions.filter((transactionEl) => transactionEl.id !== payload)}
    }
  },
});

export const { add, remove } = transactionsSlice.actions;
export default transactionsSlice.reducer;