import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import uiSlice from "./ui";
import productsListSlice from "./productsList";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistSlice from "./wishlist";

const rootReducer = combineReducers({
  user: userSlice,
  ui: uiSlice,
  wishlist: wishlistSlice,
  productsList: productsListSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productsList", "user", "wishlist"],
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
