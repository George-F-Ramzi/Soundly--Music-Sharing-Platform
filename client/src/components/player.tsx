import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ISongCard } from "../lib/types.def";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PlayerContext from "../lib/player_context";

function Player() {
  const [song, setSong] = useState<ISongCard>();

  return (
    <div>
      <PlayerContext.Provider value={{ setSong }}>
        <Outlet />
      </PlayerContext.Provider>
      {song ? <PlayerBody song={song} /> : ""}
    </div>
  );
}

export default Player;

//

function PlayerBody({ song }: { song: ISongCard }) {
  return (
    <div className="h-[120px]  flex items-center justify-center bg-gray-800 fixed left-0 bottom-0 w-screen">
      <div className="max-w-[1180px] px-4  relative  phone:px-3 py-[10px] w-[1180px] h-full flex ">
        <Link to={`/song/${song.id}`}>
          <img
            className="min-w-[100px] tablet:h-[100px]  tablet:absolute w-[100px] tablet:-top-10 tablet:border tablet:border-gray-500 h-full rounded"
            src={song.song_cover_url}
            alt="song-thumbnail"
          />
        </Link>
        <div className="text-white mr-8 tablet:absolute tablet:left-[120px] tablet:top-[4px]  min-w-fit flex-col justify-center flex font-bold ml-4 text-2xl">
          <Link to={`/song/${song.id}`} className="text-xl">
            {song.song_name}
          </Link>
          <Link
            to={`/artist/${song.artist_id}`}
            className="text-[14px] text-gray-300"
          >
            {song.artist?.username}
          </Link>
        </div>
        <AudioPlayer
          layout="horizontal"
          showJumpControls={false}
          src={song.song_file_url}
          autoPlay
          className="w-full  mx-4 tablet:mt-10 tablet:ml-0  "
        />
      </div>
    </div>
  );
}
