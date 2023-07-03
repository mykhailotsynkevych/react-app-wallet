export const transactions = (state = [], action) => {
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