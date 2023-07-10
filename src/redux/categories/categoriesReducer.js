import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCategory, deleteCategory } from "./categoriesActions";

const initialCategoriesState = [
  //Expense
  { id: "1", transaction: "Expense", nameCategory: "Food" },
  { id: "2", transaction: "Expense", nameCategory: "Car" },
  { id: "3", transaction: "Expense", nameCategory: "House" },
  //Income
  { id: "4", transaction: "Income", nameCategory: "Work" },
  { id: "5", transaction: "Income", nameCategory: "Other" },
];

const categoriesReducer = createReducer(initialCategoriesState, (builder) => {
  builder
    .addCase(addCategory, (state, {payload}) => {
      return [...state, payload]
    })
    .addCase(deleteCategory, (state, {payload}) => {
      return state.filter((category) => category.id !== payload)
    })
})

export default combineReducers({categories: categoriesReducer});
