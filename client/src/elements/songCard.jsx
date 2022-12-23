import React from "react";
import "../css/card.css";
import { RiPlayCircleFill } from "react-icons/ri";

const SongCard = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/200/300" className="card__img" />
      <div className="card__info">
        <h5 className="card__title">Song Name Goes Here</h5>
        <p className="card__subtitle body2">Artist name</p>
        <div className="card__play">
          <RiPlayCircleFill className="play__icon" size={"28px"} />
          <p className="play__text">3:24s</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
