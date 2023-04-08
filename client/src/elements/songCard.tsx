import { useContext } from "react";
import { ContextPlayerType, Song } from "../lib/types.def";
import PlayerContext from "../microElements/playerContext";

function SongCard({ data }: { data: Song }) {
  const { setSong }: ContextPlayerType = useContext(PlayerContext);
  return (
    <div
      onClick={() => setSong && setSong(data)}
      className="w-full cursor-pointer p-[10px] flex  h-[100px] bg-gray-800 text-white rounded-[4px]"
    >
      <img src={data.coverUrl} className="min-w-[80px] h-full rounded" />
      <div className="ml-4">
        <h5 className="font-bold mb-2">{data.songName}</h5>
        <p className="text-gray-300">{data.username}</p>
      </div>
    </div>
  );
}

export default SongCard;
