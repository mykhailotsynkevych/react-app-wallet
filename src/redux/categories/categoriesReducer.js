import LSapi from "../../utils/api/LSapi";
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

const categoriesReducer = createReducer(initialCategoriesState, {
    [addCategory]: (state, {payload}) => {
      const data = [...state, payload];
      // LSapi.setDataToLS(LSapi.keys.categoriesList, data);
      return [data]
    }  ,
    [deleteCategory]: (state, {payload}) => {
      const data = state.filter((category) => category.id !== payload);
      // LSapi.setDataToLS(LSapi.keys.categoriesList, data);
      return data;
    }
  });

export default combineReducers({categories: categoriesReducer});
