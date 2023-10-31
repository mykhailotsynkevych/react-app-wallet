import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTransactionsApi,
  addTransactionsApi,
  deleteTransactionsApi,
  editTransactionsApi,
} from "../../utils/api/mockapi";

export const getTransactions = createAsyncThunk(
  "getTransactions",
  async (_, thunkApi) => {
    try {
      const transactions = await getTransactionsApi();
      return transactions;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactions = createAsyncThunk(
  "addTransactions",
  async (transactionEl, { rejectWithValue }) => {
    try {
      const newTransactionEl = await addTransactionsApi(transactionEl);
      return newTransactionEl;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactions = createAsyncThunk(
  "deleteTransactions",
  async (id, { rejectWithValue }) => {
    try {
      await deleteTransactionsApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editTransactions = createAsyncThunk(
  "editTransactions",
  async (transactionEl, { rejectWithValue }) => {
    try {
      await editTransactionsApi(transactionEl);
      return transactionEl;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
