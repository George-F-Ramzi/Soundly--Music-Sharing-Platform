import { useRef, useState, useEffect } from "react";
import lodash from "lodash";
import {
  RiPlayCircleFill,
  RiVolumeUpFill,
  RiHeart2Line,
  RiPauseCircleFill,
} from "react-icons/ri";

const Player = ({ data }) => {
  const song = useRef();
  const [play, setPlay] = useState(false);
  const [durtion, setDurtion] = useState(0);

  const togglePlay = () => {
    if (song.current.paused) {
      song.current.play();
      setPlay(true);
    } else {
      song.current.pause();
      setPlay(false);
    }
  };
  return (
    <div className="player">
      <div className="Song-info">
        <img className="player__img" src={data.photoUrl} />
        <div>
          <h5 className="info__title">{data.songName}</h5>
          <p className="info__subtitle">{data.username}</p>
        </div>
      </div>
      <div className="controller">
        {!play ? (
          <RiPlayCircleFill onClick={togglePlay} className="con-icon" />
        ) : (
          <RiPauseCircleFill onClick={togglePlay} className="con-icon" />
        )}
        <div className="bar">
          <p className="left-dur">0:43</p>
          <div className="inner-bar"></div>
          <p className="right-dur">{durtion}s</p>
        </div>
        <RiVolumeUpFill className="con-icon" />
        <audio autoPlay ref={song} src={data.songUrl} />
      </div>
      <RiHeart2Line className="con-icon margin-right" />
    </div>
  );
};

export default Player;
