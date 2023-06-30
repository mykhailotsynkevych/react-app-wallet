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

export const addTransaction = (transaction, date, time, category, amount, comment) => {
  return {
    type: "transactions/addTransaction",
    payload: {
      id: nanoid(),
      transaction,
      date,
      time,
      category,
      amount,
      comment,
    },
  };
};

export const deleteTransaction = (categoryId) => {
  return {
    type: "transactions/deleteTransaction",
    payload: categoryId,
  };
};
