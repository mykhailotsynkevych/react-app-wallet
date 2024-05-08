import { configureStore } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import categories from "../redux/categories/categoriesSlice";
import balance from "../redux/balance/balanceSlice";
import transactions from "../redux/transactions/transactionsSlice";
import filterReducer from "../redux/filter/filterSlice";
import langReducer from "../redux/lang/langSlice";
import authReducer from "../redux/auth/authSlice";

const filterPersistConfig = {
  key: "filter",
  version: 1,
  storage,
  whitelist: ["value"],
};

const langPersistConfig = {
  key: "lang",
  version: 1,
  storage,
  whitelist: ["value"],
};

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["idToken", "refreshToken"],
};

const filterPersistedReducer = persistReducer(filterPersistConfig, filterReducer);
const langPersistedReducer = persistReducer(langPersistConfig, langReducer);
const authPersistedReducer = persistReducer(authPersistConfig , authReducer);


export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    categories,
    balance,
    transactions,
    filter: filterPersistedReducer,
    lang: langPersistedReducer 
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
