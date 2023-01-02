import React from "react";
import { useNavigate } from "react-router-dom";

const NotificationCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="inbox-card">
      <img
        onClick={() => navigate(`/profile/${data.triggerId}`)}
        src={data.photoUrl}
        className="inbox-card__img"
      />
      <div className="inbox-user__info">
        <p
          onClick={() => navigate(`/profile/${data.triggerId}`)}
          className="body1 inbox-p"
        >
          {data.username}
        </p>
        {data.messageId === 1 && (
          <h5 className="inbox-details">Upload A New Song</h5>
        )}
        {data.messageId === 2 && (
          <h5 className="inbox-details">Started Following You</h5>
        )}
        {data.messageId === 3 && (
          <h5 className="inbox-details">Likes Your Song</h5>
        )}
        {data.messageId === 4 && (
          <h5 className="inbox-details">Commented on Your Song</h5>
        )}
      </div>
      {data.messageId === 1 && (
        <button
          onClick={() => navigate(`/song/${data.songId}`)}
          className="see--btn"
        >
          See
        </button>
      )}
      {data.messageId === 2 && (
        <button
          onClick={() => navigate(`/profile/${data.triggerId}`)}
          className="see--btn"
        >
          See
        </button>
      )}

      {data.messageId === 4 && (
        <button
          onClick={() => navigate(`/song/${data.songId}`)}
          className="see--btn"
        >
          See
        </button>
      )}
    </div>
  );
};

export default NotificationCard;
