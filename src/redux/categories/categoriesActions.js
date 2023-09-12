import { createAction } from "@reduxjs/toolkit";

// export const changeFilter = createAction("todo/changeFilter", (event) => {
//   return {
//     payload: event.target.value,
//   };
// });

export const getCategoriesRequest = createAction("todo/getCategoriesRequest");
export const getCategoriesSuccess = createAction("todo/getCategoriesSuccess");
export const getCategoriesError = createAction("todo/getCategoriesError");