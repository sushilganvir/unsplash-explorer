import { useNavigate, useParams } from "react-router-dom";
import {
  ICON_ARROW_DOWN_CIRCLE_FILL,
  ICON_ARROW_LEFT_CIRCLE_FILL,
  ICON_GRID,
  ICON_HEART,
  ICON_IMAGE,
  ICON_INSTAGRAM,
  ICON_PALETTE,
  ICON_TWITTER,
} from "../utility/icons";
import { useGetSinglePhotoQuery } from "../services/query/photos";

const Details = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { data: unitPhoto, isLoading } = useGetSinglePhotoQuery({ id });

  // back to home
  const handleBackClick = () => {
    history(-1);
  };

  return (
    <>
      {/* hero section */}
      <section>
        <div className="w-[80vw] m-auto">
        <button className="p-4 text-gray-400 text-3xl" onClick={handleBackClick}>{ICON_ARROW_LEFT_CIRCLE_FILL}</button>

        </div>

        <div className="w-[80vw] md:h-[70vh] aspect-square md:aspect-video m-auto rounded-2xl relative">
          <img
            src={unitPhoto?.urls?.raw}
            alt={unitPhoto?.alt_description}
            className={
              (isLoading && "hidden") ||
              "w-full h-full rounded-3xl object-cover"
            }
          />

          {isLoading ? (
            <div className="h-full w-full bg-slate-800 animate-pulse"></div>
          ) : null}

          <a
            href={unitPhoto?.links.download}
            download={true}
            className="py-2 px-4 rounded-md absolute bottom-4 right-4 bg-green-700 text-white flex gap-2 items-center text-lg cursor-pointer"
          >
            Download {ICON_ARROW_DOWN_CIRCLE_FILL}
          </a>
        </div>
      </section>

      {/* bio */}
      <section className="mt-8">
        <div className="w-[80vw] m-auto bg-gray-900 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            <div className="flex gap-4">
              <img
                src={unitPhoto?.user.profile_image.medium}
                alt=""
                className="rounded-full border-2 border-white"
              />
              <div>
                <p className="text-white">{unitPhoto?.user.name}</p>
                <p className="text-gray-400">@{unitPhoto?.user.username}</p>
              </div>
            </div>

            <div className="w-fit m-auto md:m-px">
              <h2 className="mb-2 text-gray-400">Social Network</h2>
              <div className="flex gap-4 text-white">
                <a href={unitPhoto?.user.social.instagram_username}>
                  {ICON_INSTAGRAM}
                </a>
                <a href={unitPhoto?.user.social.twitter_username}>
                  {ICON_TWITTER}
                </a>
                <a href={unitPhoto?.user.social.portfolio_url}>{ICON_IMAGE}</a>
              </div>
            </div>
          </div>

          {/* other */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 rounded-xl bg-gray-800 flex gap-4">
              <span className="text-5xl text-amber-300">{ICON_IMAGE}</span>
              <div>
                <p className="text-xl text-gray-400">Total Photos</p>
                <p className="text-white text-3xl">
                  {unitPhoto?.user.total_photos}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gray-800 flex gap-4">
              <span className="text-5xl text-red-300">{ICON_HEART}</span>
              <div>
                <p className="text-xl text-gray-400">Total Likes</p>
                <p className="text-white text-3xl">
                  {unitPhoto?.user.total_likes}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gray-800 flex gap-4">
              <span className="text-5xl text-sky-300">{ICON_GRID}</span>
              <div>
                <p className="text-xl text-gray-400">Collections</p>
                <p className="text-white text-3xl">
                  {unitPhoto?.user.total_collections}
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gray-800 flex gap-4">
              <span className="text-5xl text-purple-300">{ICON_PALETTE}</span>
              <div>
                <p className="text-xl text-gray-400">Illustrations</p>
                <p className="text-white text-3xl">
                  {unitPhoto?.user.total_illustrations}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
