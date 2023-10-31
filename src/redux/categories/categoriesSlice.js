import { createSlice } from "@reduxjs/toolkit";
import {
  getCategories,
  addCategories,
  deleteCategories,
} from "./categoriesOperations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getCategories.pending, handlePending)
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.categories = payload;
      })
      .addCase(getCategories.rejected, handleRejected)

      //add
      .addCase(addCategories.pending, handlePending)
      .addCase(addCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.categories.push(payload);
      })
      .addCase(addCategories.rejected, handleRejected)

      //delete
      .addCase(deleteCategories.pending, handlePending)
      .addCase(deleteCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.categories.findIndex(
          (task) => task.id === payload.id
        );
        state.categories.splice(index, 1);
      })
      .addCase(deleteCategories.rejected, handleRejected);
  },
});

export default categoriesSlice.reducer;
