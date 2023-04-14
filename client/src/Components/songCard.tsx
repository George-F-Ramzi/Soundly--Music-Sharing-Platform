import { useContext } from "react";
import { ContextPlayerType, ISongCard } from "../lib/types.def";
import PlayerContext from "../ComponentHelper/playerContext";
import { RiPlayCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SongCard({ data }: { data: ISongCard }) {
  const { setSong }: ContextPlayerType = useContext(PlayerContext);
  const navigate = useNavigate();

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
      <div className="ml-4">
        <h5
          onClick={() =>
            navigate(`/song/${data.id}`, { state: { song: data } })
          }
          className="font-bold cursor-pointer mb-2"
        >
          {data.song_name}
        </h5>
        <p
          onClick={() =>
            navigate(`/profile/${data.artist_id}`, {
              state: { profile: data.artist },
            })
          }
          className="text-gray-300 cursor-pointer"
        >
          {data.artist.username}
        </p>
      </div>
    </div>
  );
}

export default SongCard;
