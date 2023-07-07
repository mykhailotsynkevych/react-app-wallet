import { createAction} from '@reduxjs/toolkit';

export const setStatusFilter = createAction(" filter/setStatusFilter", value => {
    return {
      payload: value,
    };
  });