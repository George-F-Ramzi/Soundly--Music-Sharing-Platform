import { RiHeart2Line } from "react-icons/ri";
import lodash from "lodash";
import React, { useState } from "react";
import { GetCurrentSong } from "../api/authApi";

export let SetSong;

const Player = () => {
  const [currentSong, setCurrentSong] = useState();

  SetSong = async (songId, userId) => {
    const data = await GetCurrentSong(songId, userId);
    setCurrentSong(data);
  };

  console;
  return (
    <React.Fragment>
      {lodash.isEmpty(currentSong) ? (
        ""
      ) : (
        <div className="player">
          <div className="Song-info">
            <img className="player__img" src={currentSong.coverUrl} />
            <div>
              <h5 className="info__title">{currentSong.songName}</h5>
              <p className="info__subtitle">{currentSong.username}</p>
            </div>
          </div>
          <div className="controller">
            <audio controls src={currentSong.songUrl} />
          </div>
          <RiHeart2Line className="con-icon" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Player;
