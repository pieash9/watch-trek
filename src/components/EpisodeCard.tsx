import { Episode } from "../graphql/__generated__/graphql";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addToWatchList } from "../store/slice/watchlistSlice";

type PropsType = {
  episode: Episode;
  posterImage: string | undefined;
};

const EpisodeCard = ({ episode, posterImage }: PropsType) => {
  const dispatch = useDispatch();
  const watchList = useSelector(
    (state: RootState) => state.movieWatchList.watchList
  );

  return (
    <div className="border rounded border-gray-300/80 p-2 hover:shadow-xl shadow-md duration-300 relative h-[28.5rem] overflow-hidden">
      <img
        src={posterImage}
        alt="poster image"
        className="rounded h-72 w-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">{episode?.name}</h3>
      <p className="my-1">
        Released: <span className="opacity-70">{episode?.air_date}</span>
      </p>
      <p>
        Episode: <span className="opacity-70">{episode?.episode}</span>
      </p>
      <div className="absolute flex justify-between  bottom-2 left-2 right-2">
        <button className="btn btn-xs btn-outline rounded-sm btn-neutral capitalize w-24">
          BookMark <FaBookmark />
          {/* <FaRegBookmark /> */}
        </button>
        <button
          onClick={() =>
            dispatch(
              addToWatchList({
                added_date: new Date().toISOString(),
                air_date: episode?.air_date || "",
                image: posterImage,
                episode: episode?.episode || "",
                name: episode.name || "",
              })
            )
          }
          className="btn btn-xs btn-outline rounded-sm btn-neutral capitalize w-24 "
        >
          Watchlist +
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
