import { useRef, useState, useEffect, useContext } from "react";
import { authContext } from "../App";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  RiPlayCircleFill,
  RiVolumeUpFill,
  RiHeart2Line,
  RiPauseCircleFill,
} from "react-icons/ri";

const Player = () => {
  const { currentSong } = useContext(authContext);

  return (
    <div className="player">
      <div className="Song-info">
        <img className="player__img" src={currentSong.coverUrl} />
        <div>
          <h5 className="info__title">{currentSong.songName}</h5>
          <p className="info__subtitle">{currentSong.username}</p>
        </div>
      </div>
      <div className="controller">
        <AudioPlayer autoPlay src={currentSong.songUrl} />
      </div>
      <RiHeart2Line className="con-icon margin-right" />
    </div>
  );
};

export default Player;
