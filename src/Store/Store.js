import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./MovieSlice";
const Store=configureStore({
    reducer:{
        movie:MovieSlice

    }
})
export default Store;