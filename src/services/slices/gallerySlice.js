import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
  searchQuery: "",
};

export const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState,
  reducers: {
    getGalleryData: (state, actions) => {
      state.searchQuery = actions?.payload?.searchQuery;
      state.results = actions.payload.results;
    },
  },
});

export const { getGalleryData } = gallerySlice.actions;
export default gallerySlice.reducer;
