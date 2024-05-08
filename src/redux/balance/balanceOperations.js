import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBalanceApi} from "../../utils/api/firebase";
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

// export const handleBalance = createAsyncThunk(
//   "createUserName",
//   async (userName, { rejectWithValue, getState, dispatch }) => {
//     const {
//       auth: {
//         idToken,
//         user: { localId },
//       },
//     } = getState();
//     try {
//       const createName = await createUserNameApi({userName, localId, idToken});
//       return createName;
//     } catch (error) {
//       setTimeout(() => {
//         dispatch(errorHandler({ error, cb: () => createUserName(userName) }));
//       }, 0);
//       return rejectWithValue(error.message);
//     }
//   }
// );
