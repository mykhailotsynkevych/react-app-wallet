import { nanoid } from "nanoid";

export const addTask = text => {
  return {
    type: "categories/addCategory",
    payload: {
      id: nanoid(),
      text,
    },
  };
};

export const deleteTask = categoryId => {
  return {
    type: "categories/deleteCategory",
    payload: categoryId,
  };
};

