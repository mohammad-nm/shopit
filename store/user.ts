import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  _id: string;
  email: string;
  password: string;
  token: string | null;
  cart: [];
  purchases: [];
  likes: [];
  moreInfo: {};
}

const initialState: UserState = {
  _id: "",
  email: "",
  password: "",
  token: null,
  cart: [],
  purchases: [],
  likes: [],
  moreInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setLikes: (state, action) => {
      state.likes = action.payload;
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { setUser, clearUser, setCart, setLikes } = userSlice.actions;
export default userSlice.reducer;
