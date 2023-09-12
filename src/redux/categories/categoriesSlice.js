import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./categoriesOperations";

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
    add(state, { payload }) {
      return {categories: [...state.categories, payload]}
    },
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
  }
});

export const { add, remove } = categoriesSlice.actions;
export default categoriesSlice.reducer;


