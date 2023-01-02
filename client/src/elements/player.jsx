import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import lodash from "lodash";
import React, { useState, useEffect } from "react";
import { GetCurrentSong, DidILike, Like, DisLike } from "../api/authApi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export let SetSong;

const Player = () => {
  const [currentSong, setCurrentSong] = useState();
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  SetSong = async (songId, userId) => {
    try {
      const data = await GetCurrentSong(songId, userId);
      setCurrentSong(data);
    } catch (error) {
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  useEffect(() => {
    if (!lodash.isEmpty(currentSong)) {
      trackSong();
    }
  }, [currentSong]);

  const trackSong = async () => {
    try {
      const { status } = await DidILike(currentSong.id);
      if (status == 200) {
        setLiked(true);
      } else if (status == 204) {
        setLiked(false);
      }
    } catch (error) {
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  return (
    <React.Fragment>
      {lodash.isEmpty(currentSong) ? (
        ""
      ) : (
        <div className="player">
          <div className="Song-info">
            <img
              onClick={() => {
                navigate(`/song/${currentSong.id}`);
              }}
              className="player__img"
              src={currentSong.coverUrl}
            />
            <div>
              <div className="title-like">
                <h5
                  onClick={() => {
                    navigate(`/song/${currentSong.id}`);
                  }}
                  className="info__title"
                >
                  {currentSong.songName}
                </h5>
                {liked ? (
                  <RiHeart2Fill
                    onClick={async () => {
                      try {
                        await DisLike(currentSong.id);
                        setLiked(false);
                      } catch (error) {
                        setLiked(true);
                        toast("Something Wrong Happen", { type: "error" });
                      }
                    }}
                    className="con-icon"
                  />
                ) : (
                  <RiHeart2Line
                    onClick={async () => {
                      try {
                        await Like(currentSong.id);
                        setLiked(true);
                      } catch (error) {
                        setLiked(false);
                        toast("Something Wrong Happen", { type: "error" });
                      }
                    }}
                    className="con-icon"
                  />
                )}
              </div>
              <p
                onClick={() => {
                  navigate(`/profile/${currentSong.userId}`);
                }}
                className="info__subtitle"
              >
                {currentSong.username}
              </p>
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
