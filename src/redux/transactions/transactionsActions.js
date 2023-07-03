import { nanoid } from "nanoid";

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

export const setTransactionsFilter = value => {
  return {
    type: " filterTransactions/setTransactionsFilter",
    payload: value,
  };
};