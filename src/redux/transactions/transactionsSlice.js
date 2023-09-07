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
    },
    edit(state, { payload }) {
      state.transactions = state.transactions.map((el) => 
      el.id !== payload.id ? el : {...payload})
    }
  },
});

export const { add, remove, edit } = transactionsSlice.actions;
export default transactionsSlice.reducer;