import { useState } from "react";
import { Outlet } from "react-router-dom";
import PlayerContext from "../ComponentHelper/playerContext";
import { Song } from "../lib/types.def";
import PlayerBody from "../ComponentHelper/PlayerBody";

function Player() {
  const [song, setSong] = useState<Song>();

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
