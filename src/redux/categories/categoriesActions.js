import { createAction, nanoid } from '@reduxjs/toolkit';

export const addCategory = createAction('category/add', (transaction, nameCategory) => ({
  payload: {
    id: nanoid(),
    transaction,
    nameCategory
  },
}));

export const deleteCategory = createAction('category/delete', (categoryId) => ({
  payload: categoryId,
}));

