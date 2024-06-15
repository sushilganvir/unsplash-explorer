import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getGalleryData } from "../services/slices/gallerySlice";
import {
  useGetAllPhotosQuery,
  useSearchPhotosQuery,
} from "../services/query/photos";

const Gallery = () => {
  const dispatch = useDispatch();
  const { results, searchQuery } = useSelector((state) => state.gallerySlice);
  const { data: photos, isSuccess: isPhotosSuccess } = useGetAllPhotosQuery();
  const { data, isSuccess: isSearchSuccess } = useSearchPhotosQuery({
    query: searchQuery,
  });

  useEffect(() => {
    if (searchQuery !== "") {
      dispatch(
        getGalleryData({ results: data?.results, searchQuery: searchQuery })
      );
    } else {
      dispatch(getGalleryData({ results: photos, searchQuery: searchQuery }));
    }
  }, [data?.results, dispatch, photos, searchQuery]);

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-4 mt-8">
      {results &&
        results?.map((dataset, index) => (
          <Card key={index} itemDetails={dataset} />
        ))}
    </section>
  );
};

export default Gallery;
