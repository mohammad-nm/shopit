import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import uiSlice from "./ui";
export const store = configureStore({
  reducer: {
    user: userSlice,
    ui: uiSlice,
  },
});
