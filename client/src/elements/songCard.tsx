import { RiPlayCircleFill } from "react-icons/ri";
import { SetSong } from "./player";
import { useNavigate } from "react-router-dom";

const SongCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <img
        onClick={() => navigate(`/song/${data.id}`)}
        src={data.coverUrl}
        className="card__img"
      />
      <div className="card__info">
        <h5
          onClick={() => navigate(`/song/${data.id}`)}
          className="card__title"
        >
          {data.songName}
        </h5>
        <p
          onClick={() => navigate(`/profile/${data.userId}`)}
          className="card__subtitle body2"
        >
          {data.username}
        </p>
        <div className="card__play">
          <RiPlayCircleFill
            onClick={() => SetSong(data.id, data.userId)}
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
