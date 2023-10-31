import { createSlice } from "@reduxjs/toolkit";
import { getCategories, addCategories, deleteCategories } from "./categoriesOperations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
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
  extraReducers: {
    //get
    [getCategories.pending]: handlePending,
    [getCategories.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.categories = payload;
    },
    [getCategories.rejected]: handleRejected,

    //add
    [addCategories.pending]: handlePending,
    [addCategories.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      state.categories.push(payload);
    },
    [addCategories.rejected]: handleRejected,

    //delete
    [deleteCategories.pending]: handlePending,
    [deleteCategories.fulfilled](state, {payload}) {
      state.isLoading = false;
      state.error = null;
      const index = state.categories.findIndex(
        task => task.id === payload.id
      );
      state.categories.splice(index, 1);
    },
    [deleteCategories.rejected]: handleRejected,
  }
});

export default categoriesSlice.reducer;


