import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction } from "./transactionsActions";

  const transactionsReducer = createReducer([], (builder) => {
    builder
      .addCase(addTransaction, (state, {payload}) => {
        return [...state, payload]
      })
      .addCase(deleteTransaction, (state, {payload}) => {
        return state.filter((category) => category.id !== payload)
      })
  })

  export default combineReducers({transactions: transactionsReducer});