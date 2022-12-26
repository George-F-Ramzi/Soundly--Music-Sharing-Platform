import React, { useEffect, useState } from "react";
import "../css/card.css";
import { DidIFollow, Follow } from "../api/authApi";

const ArtistCard = ({ data }) => {
  const [iFollow, setIFollow] = useState(false);
  useEffect(() => {
    trackState();
  }, [data]);

  const trackState = async () => {
    const { status } = await DidIFollow(data.id);
    if (status == 200) {
      setIFollow(true);
    } else {
      setIFollow(false);
    }
  };

  return (
    <div className="card">
      <img src={data.photoURl} className="card__img" />
      <div className="card__info">
        <h5 className="card__title">{data.username}</h5>
        <p className="card__subtitle body2">{data.followers}:Follower</p>
        {iFollow ? (
          <button className="card__follow un--follow">UnFollow</button>
        ) : (
          <button
            onClick={async () => {
              try {
                await Follow(data.id);
                setIFollow(true);
              } catch (error) {
                console.log(error);
              }
            }}
            className="card__follow"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
