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
import transactionsReducer from "../redux/transactions/transactionsSlice";
import filterReducer from "../redux/filter/filterSlice";
import langReducer from "../redux/lang/langSlice";

// const categoriesPersistConfig = {
//   key: "categories",
//   version: 1,
//   storage,
//   whitelist: ["categories"],
// };

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
  whitelist: ["value"],
};

const langPersistConfig = {
  key: "lang",
  version: 1,
  storage,
  whitelist: ["value"],
};

// const categoriesPersistedReducer = persistReducer(categoriesPersistConfig, categoriesReducer);
const transactionsPersistedReducer = persistReducer(transactionsPersistConfig, transactionsReducer);
const filterPersistedReducer = persistReducer(filterPersistConfig, filterReducer);
const langPersistedReducer = persistReducer(langPersistConfig, langReducer);


export const store = configureStore({
  reducer: {
    categories,
    transactions: transactionsPersistedReducer,
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
