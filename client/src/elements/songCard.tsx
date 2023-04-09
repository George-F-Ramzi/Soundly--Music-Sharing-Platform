import { useContext } from "react";
import { ContextPlayerType, Song } from "../lib/types.def";
import PlayerContext from "../microElements/playerContext";
import { RiPlayCircleFill } from "react-icons/ri";

function SongCard({ data }: { data: Song }) {
  const { setSong }: ContextPlayerType = useContext(PlayerContext);
  return (
    <div
      onClick={() => setSong && setSong(data)}
      className="w-full items-center cursor-pointer p-[8px] flex  h-[80px] bg-gray-800 text-white rounded-[4px]"
    >
      <div className="w-[64px] h-full relative">
        <img src={data.coverUrl} className="min-w-[64px] h-full rounded" />
        <div className="absolute w-full bg-opacity-20 h-full top-0 flex bg-black items-center justify-center rounded">
          <RiPlayCircleFill size={"28px"} />
        </div>
      </div>
      <div className="ml-4">
        <h5 className="font-bold mb-2">{data.songName}</h5>
        <p className="text-gray-300">{data.username}</p>
      </div>
    </div>
  );
}

export default SongCard;
