import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string;
  loginSignup: boolean;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    isLoggedIn: false,
    error: "",
    loginSignup: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
    loginSignup: (state, action) => {
      state.loginSignup = action.payload;
    },
    clearAll: (state) => {
      state.isLoading = false;
      state.error = "";
      state.isLoggedIn = false;
    },
  },
});

export const {
  setIsLoading,
  setError,
  clearError,
  clearAll,
  setIsLoggedIn,
  loginSignup,
} = uiSlice.actions;
export default uiSlice.reducer;
