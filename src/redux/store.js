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
import transactions from "../redux/transactions/transactionsSlice";
import filterReducer from "../redux/filter/filterSlice";
import langReducer from "../redux/lang/langSlice";

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

const filterPersistedReducer = persistReducer(filterPersistConfig, filterReducer);
const langPersistedReducer = persistReducer(langPersistConfig, langReducer);


export const store = configureStore({
  reducer: {
    categories,
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
