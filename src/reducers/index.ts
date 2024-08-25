import { configureStore } from "@reduxjs/toolkit";
import songReducer from "./songReducer";

export const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
