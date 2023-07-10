import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTransaction = createAction('transaction/add', (transaction, date, time, category, amount, comment) => {
  return {
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
});

export const deleteTransaction = createAction('transaction/delete', (transactionId) => {
  return {
    type: "transactions/deleteTransaction",
    payload: transactionId,
  };
});
