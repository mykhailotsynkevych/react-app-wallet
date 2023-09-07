import { createSlice } from "@reduxjs/toolkit";

const initialCategoriesState = [
  //Expense
  { id: "1", transaction: "Expense", nameCategory: "Food" },
  { id: "2", transaction: "Expense", nameCategory: "Car" },
  { id: "3", transaction: "Expense", nameCategory: "House" },
  //Income
  { id: "4", transaction: "Income", nameCategory: "Work" },
  { id: "5", transaction: "Income", nameCategory: "Other" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: initialCategoriesState,
  },
  reducers: {
    add(state, { payload }) {
      return {categories: [...state.categories, payload]}
    },
    remove(state, { payload }) {
      return {categories: state.categories.filter((category) => category.id !== payload)}
    }
  },
});

export const { add, remove } = categoriesSlice.actions;
export default categoriesSlice.reducer;


