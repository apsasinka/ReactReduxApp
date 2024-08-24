import reposReducer from "./reposReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    repos: reposReducer,
  },
});
