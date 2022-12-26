import React, { useEffect, useState } from "react";
import "../css/card.css";
import { DidIFollow, Follow, UnFollow } from "../api/authApi";

const ArtistCard = ({ data }) => {
  const [iFollow, setIFollow] = useState(0);
  useEffect(() => {
    trackState();
  }, [data]);

  const trackState = async () => {
    const { status } = await DidIFollow(data.id);
    if (status == 200) {
      setIFollow(0);
    } else if (status == 204) {
      setIFollow(1);
    } else setIFollow(2);
  };

  return (
    <div className="card">
      <img src={data.photoURl} className="card__img" />
      <div className="card__info">
        <h5 className="card__title">{data.username}</h5>
        <p className="card__subtitle body2">{data.followers}:Follower</p>

        {iFollow === 0 ? (
          <button
            onClick={async () => {
              try {
                await UnFollow(data.id);
                setIFollow(1);
              } catch (error) {
                console.log(error);
              }
            }}
            className="card__follow un--follow"
          >
            UnFollow
          </button>
        ) : iFollow === 1 ? (
          <button
            onClick={async () => {
              try {
                await Follow(data.id);
                setIFollow(0);
              } catch (error) {
                console.log(error);
              }
            }}
            className="card__follow"
          >
            Follow
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
