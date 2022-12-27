import React, { useState, useEffect } from "react";
import { RiEditFill } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router-dom";
import { GetLiked, GetUploaded } from "../api/authApi";
import lodash from "lodash";

const ProfilePage = () => {
  const profile = useLoaderData();
  const { userId } = useParams();

  const [uploaded, setUploaded] = useState();
  const [Liked, setLiked] = useState();

  useEffect(() => {
    trackSection();
  }, []);

  const trackSection = async () => {
    const data1 = await GetUploaded(userId);
    setUploaded(data1);
    const data2 = await GetLiked(userId);
    setLiked(data2);
  };

  return (
    <div>
      <div className="info-container">
        <div className="info__img">
          <img className="img--" src={profile.photoUrl} />
          <div className="edit__profile">
            <RiEditFill className="edit_icon" size={"28px"} />
          </div>
        </div>
        <h5 className="profile__name">{profile.username}</h5>
      </div>
      <div className="status">
        <div className="number">
          <span className="number-value">{profile.followers}</span>
          Followers
        </div>
        <div className="number">
          <span className="number-value">{profile.following}</span>
          Following
        </div>
        <div className="number">
          <span className="number-value">{profile.songs}</span>
          Songs
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
