import { combineReducers } from "redux";

const initialCategoriesState = [
    { id: "1", transaction: "Expense", nameCategory: "Food" },
    { id: "2", transaction: "Expense", nameCategory: "Car" },
    { id: "3", transaction: "Expense", nameCategory: "House" },

    { id: "4", transaction: "Income", nameCategory: "Work" },
    { id: "5", transaction: "Income", nameCategory: "Other" },
  ];
  
export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case "categories/addCategory":
      return [...state, action.payload];
    case "categories/deleteCategory":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const transactionsReducer = (state = [], action) => {
    switch (action.type) {
      case "transactions/addTransaction":
        return [...state, action.payload];
      case "transactions/deleteTransaction":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };

  export const rootReducer = combineReducers({
    categories: categoriesReducer,
    transactions: transactionsReducer,
  });