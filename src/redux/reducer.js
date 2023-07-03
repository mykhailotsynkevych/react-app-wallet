import { combineReducers } from "redux";
import { rootCategoriesReducer } from "./categories/categoriesReducer";
import { rootTransactionsReducer } from "./transactions/transactionsReducer";

export const rootReducer = combineReducers({
  categories: rootCategoriesReducer,
  transactions: rootTransactionsReducer,
});
