import { createSlice } from "@reduxjs/toolkit";

interface ProductsListState {
  products: any[];
  totalProducts: number;
  totalPages: number;
  page: number;
  limit: number;
  category: string;
  search: string;
  currentPage: number;
}
const initialState: ProductsListState = {
  products: [],
  totalProducts: 0,
  totalPages: 0,
  page: 1,
  limit: 10,
  category: "",
  search: "",
  currentPage: 1,
};

const productsListSlice = createSlice({
  name: "productsList",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearProductsList: (state) => {
      return initialState;
    },
  },
});

export const {
  setProducts,
  setTotalProducts,
  setTotalPages,
  setPage,
  setLimit,
  setCategory,
  setSearch,
  clearProductsList,
} = productsListSlice.actions;
export default productsListSlice.reducer;
