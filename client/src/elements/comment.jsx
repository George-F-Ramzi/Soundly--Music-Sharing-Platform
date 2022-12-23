import "../css/comment.css";
import React from "react";

const Comment = () => {
  return (
    <div className="comment">
      <img src="https://picsum.photos/200/300" className="comment__img" />
      <div className="theComment">
        <h5 className="comment-user">George Fawzi</h5>
        <h5 className="comment-details">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nihil
          repellendus iste nemo unde ducimus autem ipsam porro aliquam.
        </h5>
      </div>
    </div>
  );
};

export default Comment;
