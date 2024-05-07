import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTransactionsApi,
  addTransactionsApi,
  deleteTransactionsApi,
  editTransactionsApi,
} from "../../utils/api/firebase";
import { errorHandler } from "../error/errorHandler";

export const getTransactions = createAsyncThunk(
  "getTransactions",
  async (_, thunkApi) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = thunkApi.getState();
    try {
      const transactions = await getTransactionsApi({ localId, idToken });
      return transactions;
    } catch (error) {
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: getTransactions }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactions = createAsyncThunk(
  "addTransactions",
  async (transactionEl, { rejectWithValue, getState, dispatch }) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = getState();
    try {
      const newTransactionEl = await addTransactionsApi({transactionEl, localId, idToken });
      return newTransactionEl;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => addTransactions(transactionEl) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
  "deleteTransactions",
  async (id, { rejectWithValue, getState }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;

    try {
      await deleteTransactionsApi({id, localId, idToken });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTransactions = createAsyncThunk(
  "editTransactions",
  async (transactionEl, { rejectWithValue, getState }) => {
    const {
      idToken,
      user: { localId },
    } = getState().auth;
    try {
      await editTransactionsApi({transactionEl, localId, idToken });
      return transactionEl;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
