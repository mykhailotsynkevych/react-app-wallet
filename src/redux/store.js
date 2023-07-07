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

import categoriesReducer from "../redux/categories/categoriesReducer";
import transactionsReducer from "../redux/transactions/transactionsReducer";
import filterReducer from "../redux/filter/filterReducer";

const categoriesPersistConfig = {
  key: "categories",
  version: 1,
  storage,
  whitelist: ["categories"],
};

const categoriesPersistedReducer = persistReducer(categoriesPersistConfig, categoriesReducer);
// const transactionsPersistedReducer = persistReducer(counterPersistConfig, transactionsReducer);
// const filterPersistedReducer = persistReducer(counterPersistConfig, filterReducer);


export const store = configureStore({
  reducer: {
    categories: categoriesPersistedReducer,
    transactions: transactionsReducer,
    filter: filterReducer,
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
