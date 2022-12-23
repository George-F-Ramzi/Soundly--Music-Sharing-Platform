import React from "react";
import NavBar from "../elements/navBar";
import { RiPlayCircleFill, RiHeart2Line } from "react-icons/ri";
import Comment from "../elements/comment";

const SongPage = () => {
  return (
    <div>
      <NavBar />
      <div className="info-container">
        <img className="info__img" src="https://picsum.photos/200/300" />
        <h5 className="profile__name">Hello World</h5>
      </div>
      <div className="song-status">
        <RiPlayCircleFill className="play-btn" />
        <div className="song-status-numbers">
          <div className="song-number">
            <span className="value">23k</span>
            Likes
          </div>
          <div className=" song-number">
            <span className="value">23k</span>
            Comments
          </div>
          <div className="song-number">
            <span className="value">2d</span>
            Added
          </div>
        </div>
        <RiHeart2Line className="like-btn" />
      </div>
      <div className="section">
        <h3 className="section__title">Comments</h3>
        <div className="write-comment">
          <img className="write__img" src="https://picsum.photos/200/300" />
          <input
            placeholder="What's in your mind?"
            className=" input-comment input input--big "
          />
        </div>
        <Comment />
      </div>
    </div>
  );
};

export default SongPage;
