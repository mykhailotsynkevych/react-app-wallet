import { createSlice } from "@reduxjs/toolkit";
import { getCategories, addCategories, deleteCategories } from "./categoriesOperations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    remove(state, { payload }) {
      return {categories: state.categories.filter((category) => category.id !== payload)}
    }
  },
  extraReducers: {
    //get
    [getCategories.pending]: handlePending,
    [getCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories = action.payload;
    },
    [getCategories.rejected]: handleRejected,

    //add
    [addCategories.pending]: handlePending,
    [addCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.categories.push(action.payload);
    },
    [addCategories.rejected]: handleRejected,

    //delete
    [deleteCategories.pending]: handlePending,
    [deleteCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.categories.findIndex(
        task => task.id === action.payload.id
      );
      state.categories.splice(index, 1);
    },
    [deleteCategories.rejected]: handleRejected,
  }
});

export default categoriesSlice.reducer;


