import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import readReducer from "./slices/readSlice";

export const store = configureStore({
    reducer:{
      mobileNav:navReducer,
      readSlice:readReducer
    }
}) 