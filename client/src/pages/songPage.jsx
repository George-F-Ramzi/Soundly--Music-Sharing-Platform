import React, { useState, useEffect } from "react";
import { RiPlayCircleFill, RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";
import Comment from "../elements/comment";
import { SetSong } from "../elements/player";
import {
  DidILike,
  DoComment,
  GetComments,
  Like,
  DisLike,
} from "../api/authApi";
import joi from "joi";
import SectionPlacholder from "../elements/sectionPlacholder";
import lodash from "lodash";
import { Photo } from "../elements/navBar";

const SongPage = () => {
  const Song = useLoaderData();
  const { songId } = useParams();

  const [details, setDetails] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    GetCommentsData();
    trackSong();
  }, [songId]);

  const trackSong = async () => {
    const { status } = await DidILike(songId);
    if (status == 200) {
      setLiked(true);
    } else if (status == 204) {
      setLiked(false);
    }
  };

  const GetCommentsData = async () => {
    setLoading(true);
    try {
      const data = await GetComments(songId);
      setComments(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const Commenting = async () => {
    const schema = joi.object({ details: joi.string().required() });
    const { error } = schema.validate({ details });
    if (error) return;
    try {
      setDisable(true);
      await DoComment(Song.id, Song.userId, details);
      setDisable(false);
      GetCommentsData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setDetails(e.target.value);
  };

  return (
    <div>
      <div className="info-container">
        <img className="info__img" src={Song.coverUrl} />
        <h5 className="profile__name">{Song.songName}</h5>
      </div>
      <div className="song-status">
        <RiPlayCircleFill
          onClick={() => SetSong(Song.id, Song.userId)}
          className="play-btn"
        />
        <div className="song-number">
          <span className="value">{Song.likes}</span>
          Likes
        </div>
        {liked ? (
          <RiHeart2Fill
            onClick={async () => {
              try {
                await DisLike(songId);
                setLiked(false);
              } catch (error) {
                setLiked(true);
                console.log(error);
              }
            }}
            className="like-btn"
          />
        ) : (
          <RiHeart2Line
            onClick={async () => {
              try {
                await Like(songId);
                setLiked(true);
              } catch (error) {
                setLiked(false);
                console.log(error);
              }
            }}
            className="like-btn"
          />
        )}
      </div>
      <div className="section">
        <h3 className="section__title">Comments</h3>
        <div className="write-comment">
          <img className="write__img" src={Photo} />
          <form
            className="form-comment"
            onSubmit={(e) => {
              e.preventDefault();
              Commenting();
            }}
          >
            <input
              placeholder="What's in your mind?"
              className="input-comment input input--big "
              type={"text"}
              value={details}
              onChange={handleChange}
              required
              disabled={disable}
            />
          </form>
        </div>
        {loading ? (
          <SectionPlacholder />
        ) : lodash.isEmpty(comments) ? (
          ""
        ) : (
          comments.map((comment, index) => (
            <Comment key={index} data={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default SongPage;
