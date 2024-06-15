import { useEffect } from "react";
import Gallery from "../components/Gallery";
import GlobalSearch from "../components/GlobalSearch";
import { useGetAllPhotosQuery } from "../services/query/photos";
import { useDispatch } from "react-redux";
import { getGalleryData } from "../services/slices/gallerySlice";

const Home = () => {


  return (
    <>
      <section>
        <GlobalSearch />
      </section>

      {/* gallery */}
      <section>
        <Gallery />
      </section>
    </>
  );
};

export default Home;
