import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addTransaction, deleteTransaction } from "./transactionsActions";

export const transactionsReducer = createReducer([], {
     [addTransaction]: (state, {payload}) => {
        return [...state, payload]},
        [deleteTransaction]: (state, {payload}) => {
          return state.filter((transaction) => transaction.id !== payload);
        }
  });

  export default combineReducers({transactions: transactionsReducer});