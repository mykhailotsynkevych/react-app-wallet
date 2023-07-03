import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer.js";
import { combineReducers } from "redux";

import { categories } from "../redux/categories/categoriesReducer";
import { transactions } from "../redux/transactions/transactionsReducer";
import { filter } from "../redux/filter/filterReducer";

const rootReducer = combineReducers({
    categories,
    transactions,
    filter,
  });

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);