import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice';
import wishlistslice from './slices/wishlistSlice';
const store = configureStore({
    reducer: {
   productReducer: productSlice,
   wishlistReducer: wishlistslice
    }
});
export default store;