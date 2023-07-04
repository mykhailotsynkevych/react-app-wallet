import LSapi from "../../utils/api/LSapi";

const initialCategoriesState = [
  { id: "1", transaction: "Expense", nameCategory: "Food" },
  { id: "2", transaction: "Expense", nameCategory: "Car" },
  { id: "3", transaction: "Expense", nameCategory: "House" },

  { id: "4", transaction: "Income", nameCategory: "Work" },
  { id: "5", transaction: "Income", nameCategory: "Other" },
];

const categoriesReducer = (state = LSapi.getDataFromLS(LSapi.keys.categoriesList, initialCategoriesState), action) => {
 let data;
  switch (action.type) {
    case "categories/addCategory":
      data = [...state, action.payload];
      LSapi.setDataToLS(LSapi.keys.categoriesList, data);
      return data;
    case "categories/deleteCategory":
      data = state.filter(category => category.id !== action.payload);
      LSapi.setDataToLS(LSapi.keys.categoriesList, data);
      return data;
    default:
      return state;
  }
};

export default categoriesReducer;
