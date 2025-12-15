import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice.js"

export const store = configureStore({
    reducer:{
        cart : cartReducer
    },
});