import { useContext } from "react";
import "../css/card.css";
import { RiPlayCircleFill } from "react-icons/ri";
import { authContext } from "../App";

const SongCard = ({ data }) => {
  const { Song } = useContext(authContext);
  return (
    <div className="card">
      <img src={data.coverUrl} className="card__img" />
      <div className="card__info">
        <h5 className="card__title">{data.songName}</h5>
        <p className="card__subtitle body2">{data.username}</p>
        <div className="card__play">
          <RiPlayCircleFill
            onClick={() => Song(data.id, data.userId)}
            className="play__icon"
            size={"28px"}
          />
          <p className="play__text">{data.likes}:Likes</p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
