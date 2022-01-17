import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./redux/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
