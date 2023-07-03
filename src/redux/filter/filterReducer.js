const filterReducer = (state = "Expense", action) => {
    switch (action.type) {
      case " filter/setStatusFilter":
        return action.payload
      default:
        return state;
    }
  };

  export default filterReducer;
