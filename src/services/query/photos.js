import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ACCESS_KEY, BASE_URL } from "../../utility/contants";

export const photosAPI = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getAllPhotos: build.query({
      query: () => ({
        url: `/photos?client_id=${ACCESS_KEY}`,
        method: "GET",
      }),
    }),

    getSinglePhoto: build.query({
      query: ({ id }) => ({
        url: `/photos/${id}?client_id=${ACCESS_KEY}`,
        method: "GET",
      }),
    }),

    searchPhotos: build.query({
      query: ({ query }) => ({
        url: `/search/photos?query=${query}&client_id=${ACCESS_KEY}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPhotosQuery, useGetSinglePhotoQuery , useSearchPhotosQuery } = photosAPI;
