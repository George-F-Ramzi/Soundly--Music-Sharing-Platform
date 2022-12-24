import React from "react";
import "../css/card.css";

const ArtistCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.photoURl} className="card__img" />
      <div className="card__info">
        <h5 className="card__title">{data.username}</h5>
        <p className="card__subtitle body2">{data.followers}:Follower</p>
        <button className="card__follow">Follow</button>
      </div>
    </div>
  );
};

export default ArtistCard;
