export const filter = (state = "Expense", action) => {
    switch (action.type) {
      case " filterCategories/setStatusFilter":
        return {
          ...state,
          status: action.payload,
        };
      default:
        return state;
    }
  };
