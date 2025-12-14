import { configureStore, createSlice } from "@reduxjs/toolkit";
import product from "./productItem-1";


export const store = configureStore({
    reducer:{
        product
    }
})