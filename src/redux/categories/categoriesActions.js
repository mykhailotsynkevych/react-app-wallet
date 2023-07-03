import { nanoid } from "nanoid";

export const addCategory = (transaction, nameCategory) => {
  return {
    type: "categories/addCategory",
    payload: {
      id: nanoid(),
      transaction,
      nameCategory
    },
  };
};

export const deleteCategory = (categoryId) => {
  return {
    type: "categories/deleteCategory",
    payload: categoryId,
  };
};

export const setCategoriesFilter = value => {
  return {
    type: " filterCategories/setCategoriesFilter",
    payload: value,
  };
};