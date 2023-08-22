import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "Expense",
  },
  reducers: {
    update(state, { payload }) {
      return {filter: payload}
    },
  },
});

export const { update } = filterSlice.actions;
export default filterSlice.reducer;