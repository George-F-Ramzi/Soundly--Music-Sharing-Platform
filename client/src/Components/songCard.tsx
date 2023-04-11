import { useContext } from "react";
import { Artist, ContextPlayerType, Song } from "../lib/types.def";
import PlayerContext from "../ComponentHelper/playerContext";
import { RiPlayCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SongCard({ data }: { data: Song }) {
  const { setSong }: ContextPlayerType = useContext(PlayerContext);
  const navigate = useNavigate();

  let profile: Artist = {
    followed: data.followed,
    followers: data.followers,
    following: data.following,
    id: data.userId,
    photoUrl: data.photoUrl,
    songs: data.songs,
    username: data.username,
  };

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
        <h5
          onClick={() =>
            navigate(`/song/${data.id}`, { state: { song: data } })
          }
          className="font-bold cursor-pointer mb-2"
        >
          {data.songName}
        </h5>
        <p
          onClick={() =>
            navigate(`/profile/${data.userId}`, { state: { profile } })
          }
          className="text-gray-300"
        >
          {data.username}
        </p>
      </div>
    </div>
  );
}

export default SongCard;
