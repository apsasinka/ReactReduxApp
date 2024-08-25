import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songReducer";

export const store = configureStore({
  reducer: {
    repos: songReducer,
  },
});
