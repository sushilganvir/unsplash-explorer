import { useDispatch } from "react-redux";
import { getGalleryData } from "../services/slices/gallerySlice";
import { useEffect, useRef, useState } from "react";

const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debounceTimer = useRef(null);
  const dispatch = useDispatch();

  const handleSearchresults = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (searchQuery) {
        dispatch(getGalleryData({ searchQuery }));
      }
    }, 2000);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchQuery, dispatch]);

  return (
    <div className="">
      <div className="relative w-[80vw] md:w-[50%] m-auto ">
        <input
          type="text"
          className="w-full  px-4 py-3 border border-gray-300  rounded-lg outline-none relative"
          placeholder="search gallery.."
          onChange={handleSearchresults}
        />

        {/* <div className="absolute w-full bg-white rounded-md z-20 hidden">
          {photos?.results.slice(0, 5).map((result) => (
            <Link
              key={result?.id}
              className="block p-4 bg-gray-50 text-gray-500 capitalize hover:bg-gray-100 transition-colors"
            >
              {result.alt_description}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default GlobalSearch;
