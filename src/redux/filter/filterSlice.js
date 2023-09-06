import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "Expense",
  },
  reducers: {
    update(state, { payload }) {
      return {value: payload}
    },
  },
});

export const { update } = filterSlice.actions;
export default filterSlice.reducer;