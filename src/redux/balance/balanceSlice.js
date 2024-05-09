import { createSlice } from "@reduxjs/toolkit";
import {
  getBalance,
  editBalance,
  // deleteCategories,
} from "./balanceOperations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    balance: 100,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getBalance.pending, handlePending)
      .addCase(getBalance.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.balance = payload;
      })
      .addCase(getBalance.rejected, handleRejected)

      // edit
      .addCase(editBalance.pending, handlePending)
      .addCase(editBalance.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.balance = payload;
      })
      .addCase(editBalance.rejected, handleRejected)

      //delete
      // .addCase(deleteCategories.pending, handlePending)
      // .addCase(deleteCategories.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   const index = state.categories.findIndex(
      //     (task) => task.id === payload.id
      //   );
      //   state.categories.splice(index, 1);
      // })
      // .addCase(deleteCategories.rejected, handleRejected);
  },
});

export default balanceSlice.reducer;
