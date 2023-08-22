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

import categoriesReducer from "../redux/categories/categoriesSlice";
import transactionsReducer from "../redux/transactions/transactionsSlice";
import filterReducer from "../redux/filter/filterSlice";

const categoriesPersistConfig = {
  key: "categories",
  version: 1,
  storage,
  whitelist: ["categories"],
};

const transactionsPersistConfig = {
  key: "transactions",
  version: 1,
  storage,
  whitelist: ["transactions"],
};

const filterPersistConfig = {
  key: "filter",
  version: 1,
  storage,
  whitelist: ["filter"],
};

const categoriesPersistedReducer = persistReducer(categoriesPersistConfig, categoriesReducer);
const transactionsPersistedReducer = persistReducer(transactionsPersistConfig, transactionsReducer);
const filterPersistedReducer = persistReducer(filterPersistConfig, filterReducer);


export const store = configureStore({
  reducer: {
    categories: categoriesPersistedReducer,
    transactions: transactionsPersistedReducer,
    filter: filterPersistedReducer,
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
