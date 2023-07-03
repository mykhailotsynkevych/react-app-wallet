import { combineReducers } from "redux";

const transactionsReducer = (state = [], action) => {
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

  const filterTransactionsReducer = (state = "", action) => {
    switch (action.type) {
      case " filterTransactions/setTransactionsFilter":
        return {
          ...state,
          status: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const rootTransactionsReducer = combineReducers({
    transactions: transactionsReducer,
    filterTransactions: filterTransactionsReducer,
  });