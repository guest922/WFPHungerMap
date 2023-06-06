import { configureStore } from "@reduxjs/toolkit";
import { hungermapApi } from "./api";

export const store = configureStore({
  reducer: {
    [hungermapApi.reducerPath]: hungermapApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hungermapApi.middleware),
});
