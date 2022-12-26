import { RiHeart2Line } from "react-icons/ri";
import lodash from "lodash";
import React, { useState } from "react";
import { GetCurrentSong } from "../api/authApi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

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
              <div className="title-like">
                <h5 className="info__title">{currentSong.songName}</h5>
                <RiHeart2Line className="con-icon" />
              </div>
              <p className="info__subtitle">{currentSong.username}</p>
            </div>
          </div>
          <AudioPlayer
            layout="horizontal"
            autoPlay
            src={currentSong.songUrl}
            showJumpControls={false}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default Player;
