import { useContext } from "react";
import { IContextPlayer, ISongCard } from "../lib/types.def";
import { RiPlayCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import PlayerContext from "../lib/player_context";

function SongCard({ data }: { data: ISongCard }) {
  const { setSong }: IContextPlayer = useContext(PlayerContext);

  return (
    <div className="w-full items-center  p-[8px] flex  h-[80px] bg-gray-800 text-white rounded-[4px]">
      <div className="w-[64px] h-full relative">
        <img
          src={data.song_cover_url}
          className="min-w-[64px] h-full rounded"
        />
        <div
          onClick={() => setSong && setSong(data)}
          className="absolute cursor-pointer w-full bg-opacity-20 h-full top-0 flex bg-black items-center justify-center rounded"
        >
          <RiPlayCircleFill size={"28px"} />
        </div>
      </div>
      <div className="ml-4 flex flex-col">
        <Link to={`/song/${data.id}`} className="font-bold cursor-pointer mb-2">
          {data.song_name}
        </Link>
        <Link
          to={`/artist/${data.artist_id}`}
          className="text-gray-300 cursor-pointer"
        >
          {data.artist.username}
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
