import React from "react";

const NotificationCard = () => {
  return (
    <div className="inbox-card">
      <img src="https://picsum.photos/200/300" className="inbox-card__img" />
      <div className="inbox-user__info">
        <p className="body1 inbox-p">George Fawzi:2d</p>
        <h5 className="inbox-details">Upload A New Song</h5>
      </div>
      <button className="see--btn">See</button>
    </div>
  );
};

export default NotificationCard;
