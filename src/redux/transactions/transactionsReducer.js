import LSapi from "../../utils/api/LSapi";

export const transactionsReducer = (state = LSapi.getDataFromLS(LSapi.keys.transactionsList, []), action) => {
    switch (action.type) {
      case "transactions/addTransaction":
        const data = [...state, action.payload];
        LSapi.setDataToLS(LSapi.keys.transactionsList, data);
        return data;
      case "transactions/deleteTransaction":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      default:
        return state;
    }
  };

  export default transactionsReducer;