/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ICON_ARROW_UP_RIGHT, ICON_HEART } from "../utility/icons";

const Card = ({ itemDetails }) => {
  return (
    <div className="p-4 rounded-2xl group">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={itemDetails?.urls?.regular}
          alt={itemDetails?.alt_description}
          className="aspect-square object-cover rounded-xl shadow-xl group-hover:scale-110 group-hover:transition-all group-hover:duration-300 scale-100 duration-300"
        />
        <div className="absolute top-4 right-4 bg-black opacity-60 p-2 rounded-xl text-white flex gap-2 items-center">
          <span className="group-hover:text-red-500 transition-colors delay-100 group-hover:animate-pulse">
            {ICON_HEART}
          </span>
          <span>{itemDetails.likes}</span>
        </div>

        <button
          className="p-2 absolute shadow-2xl bg-blue-500 text-white rounded-full translate-x-0 translate-y-0 opacity-0 
        group-hover:opacity-100 group-hover:-translate-y-16 group-hover:translate-x-60 delay-100 transition-all text-2xl"
        >
          <Link to={`/${itemDetails?.id}`}>{ICON_ARROW_UP_RIGHT}</Link>{" "}
        </button>
      </div>

      {/* <p className="mt-4 text-base text-gray-400 capitalize group-hover:text-blue-500 transition-colors font-light">
        {itemDetails?.alt_description}
      </p> */}
    </div>
  );
};

export default Card;
