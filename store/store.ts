import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import uiSlice from "./ui";
import productsListSlice from "./productsList";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userSlice,
  ui: uiSlice,
  productsList: productsListSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsList", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});
export const persistor = persistStore(store);
