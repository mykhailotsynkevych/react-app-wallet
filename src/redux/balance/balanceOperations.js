import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceApi, editBalanceApi} from "../../utils/api/firebase";
import { errorHandler } from "../error/errorHandler";

export const getBalance = createAsyncThunk(
  "getBalance",
  async (_, thunkApi) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
    } = thunkApi.getState();

    try {
      const balance = await getBalanceApi({ localId, idToken });
      return balance;
    } catch (error) {
      setTimeout(() => {
        thunkApi.dispatch(errorHandler({ error, cb: getBalance }));
      }, 0);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editBalance = createAsyncThunk(
  "editBalance",
  async (transaction, { rejectWithValue, getState, dispatch }) => {
    const {
      auth: {
        idToken,
        user: { localId },
      },
      balance: { balance },
    } = getState();
    try {
      const newBalance = transaction.transaction === "Income" ? balance + transaction.amount : balance - transaction.amount;
      const updateBalance = await editBalanceApi({newBalance, localId, idToken});
      console.log(updateBalance)
      return updateBalance;
    } catch (error) {
      setTimeout(() => {
        dispatch(errorHandler({ error, cb: () => editBalance(transaction) }));
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
