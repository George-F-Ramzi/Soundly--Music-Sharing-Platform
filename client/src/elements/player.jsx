import { RiHeart2Line } from "react-icons/ri";
import lodash from "lodash";
import React from "react";

const Player = ({ currentSong }) => {
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
            <ReactPlayer url={currentSong.songUrl} />
          </div>
          <RiHeart2Line className="con-icon" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Player;
