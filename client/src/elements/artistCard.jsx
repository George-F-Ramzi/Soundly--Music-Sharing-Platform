import React, { useEffect, useState } from "react";
import "../css/card.css";
import { DidIFollow, Follow, UnFollow } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ArtistCard = ({ data }) => {
  const [iFollow, setIFollow] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    trackState();
  }, [data]);

  const trackState = async () => {
    try {
      const { status } = await DidIFollow(data.id);
      if (status == 200) {
        setIFollow(0);
      } else if (status == 204) {
        setIFollow(1);
      } else {
        setIFollow(2);
      }
      setLoading(false);
    } catch (error) {
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  return (
    <div className="card">
      <img
        onClick={() => navigate(`/profile/${data.id}`)}
        src={data.photoUrl}
        className="card__img"
      />
      <div className="card__info">
        <h5
          onClick={() => navigate(`/profile/${data.id}`)}
          className="card__title"
        >
          {data.username}
        </h5>
        <p className="card__subtitle body2">{data.followers}:Follower</p>
        {loading ? (
          <button className="card__follow-loading">Loading...</button>
        ) : iFollow === 0 ? (
          <button
            onClick={async () => {
              try {
                setLoading(true);
                await UnFollow(data.id);
                setIFollow(1);
                setLoading(false);
              } catch (error) {
                setLoading(false);
                toast("Something Wrong Happen", { type: "error" });
              }
            }}
            className="card__follow un--follow"
          >
            UnFollow
          </button>
        ) : iFollow === 1 ? (
          <button
            onClick={async () => {
              try {
                setLoading(true);
                await Follow(data.id);
                setIFollow(0);
                setLoading(false);
              } catch (error) {
                setLoading(false);
                toast("Something Wrong Happen", { type: "error" });
              }
            }}
            className="card__follow"
          >
            Follow
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ArtistCard;
