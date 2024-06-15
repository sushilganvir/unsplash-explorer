import { configureStore } from "@reduxjs/toolkit";
import { photosAPI } from "./query/photos";
import gallerySlice from "./slices/gallerySlice";

const store = configureStore({
  reducer: {
    gallerySlice: gallerySlice,
    [photosAPI.reducerPath]: photosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(photosAPI.middleware),
});

export default store;
