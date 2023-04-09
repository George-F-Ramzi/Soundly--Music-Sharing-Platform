import { useState } from "react";
import { Outlet } from "react-router-dom";
import PlayerContext from "../microElements/playerContext";
import { Song } from "../lib/types.def";
import PlayerBody from "../microElements/PlayerBody";

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
