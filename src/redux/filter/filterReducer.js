import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setStatusFilter } from "./filterActions";

const filterReducer = createReducer("Expense", {
    [setStatusFilter]: (state, {payload}) => {
      return payload
    },
  });

  export default combineReducers({filter: filterReducer});
