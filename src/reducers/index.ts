import nftReducer from "./nftReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    repos: nftReducer,
  },
});
