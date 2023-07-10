import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setStatusFilter } from "./filterActions";

  const filterReducer = createReducer("Expense", (builder) => {
    builder
      .addCase(setStatusFilter, (state, {payload}) => {
        return payload
      })
  })

  export default combineReducers({filter: filterReducer});
