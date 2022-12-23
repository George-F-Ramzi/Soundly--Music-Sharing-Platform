import React from "react";
import "../css/card.css";

const ArtistCard = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/300" className="card__img" />
      <div className="card__info">
        <h5 className="card__title">Artist Name Goes Here</h5>
        <p className="card__subtitle body2">Followers Number</p>
        <button className="card__follow">Follow</button>
      </div>
    </div>
  );
};

export default ArtistCard;
