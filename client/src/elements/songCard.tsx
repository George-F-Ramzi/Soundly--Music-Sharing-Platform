import { useContext } from "react";
import { ContextPlayerType, Song } from "../lib/types.def";
import PlayerContext from "../microElements/playerContext";
import { RiPlayCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function SongCard({ data }: { data: Song }) {
  const { setSong }: ContextPlayerType = useContext(PlayerContext);
  return (
    <div className="w-full items-center  p-[8px] flex  h-[80px] bg-gray-800 text-white rounded-[4px]">
      <div className="w-[64px] h-full relative">
        <img src={data.coverUrl} className="min-w-[64px] h-full rounded" />
        <div
          onClick={() => setSong && setSong(data)}
          className="absolute cursor-pointer w-full bg-opacity-20 h-full top-0 flex bg-black items-center justify-center rounded"
        >
          <RiPlayCircleFill size={"28px"} />
        </div>
      </div>
      <div className="ml-4">
        <h5 className="font-bold mb-2">{data.songName}</h5>
        <Link to={`/profile/${data.userId}`} className="text-gray-300">
          {data.username}
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
