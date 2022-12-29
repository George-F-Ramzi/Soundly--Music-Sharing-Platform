import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../css/search.css";
import ArtistCard from "../elements/artistCard";
import SongCard from "../elements/songCard";

const SearchPage = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { value } = useParams();
  return (
    <div>
      <div className="search-section">
        <div className="filter-btns">
          <button
            onClick={() => {
              navigate(`/search/users/${value}`);
            }}
            className={
              path.pathname.includes("users") ? "filter active" : "filter"
            }
          >
            Users
          </button>
          <button
            onClick={() => {
              navigate(`/search/songs/${value}`);
            }}
            className={
              path.pathname.includes("songs") ? "filter active" : "filter"
            }
          >
            Songs
          </button>
        </div>
        <div className="result-section">
          <h5>asd</h5>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
