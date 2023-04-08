import { useState } from "react";
import { Outlet } from "react-router-dom";
import PlayerContext from "../microElements/playerContext";
import { Song } from "../lib/types.def";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function Player() {
  const [song, setSong] = useState<Song>();

  return (
    <div>
      <PlayerContext.Provider value={{ setSong }}>
        <Outlet />
      </PlayerContext.Provider>
      <div className="h-[120px]  flex items-center justify-center bg-gray-800 fixed left-0 bottom-0 w-screen">
        <div className="max-w-[1180px] px-4   phone:px-3 py-[10px] w-[1180px] h-full flex ">
          <img
            className="min-w-[100px] w-[100px] h-full rounded"
            src={song?.coverUrl}
            alt="song-thumbnail"
          />
          <div className="text-white min-w-fit flex-col justify-center flex font-bold ml-4 text-2xl">
            <h5 className="text-xl">{song?.songName}</h5>
            <p className="text-[14px] text-gray-300">{song?.username}</p>
          </div>
          <AudioPlayer
            layout="horizontal"
            showJumpControls={false}
            src={song?.songUrl}
            className="w-full ml-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
