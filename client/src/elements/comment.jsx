import React from "react";

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <img src={data.photoUrl} className="comment__img" />
      <div className="theComment">
        <h5 className="comment-user">{data.username}</h5>
        <h5 className="comment-details">{data.details}</h5>
      </div>
    </div>
  );
};

export default Comment;
