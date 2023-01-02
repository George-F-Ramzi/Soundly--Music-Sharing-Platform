import React from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import "../css/search.css";
import ArtistCard from "../elements/artistCard";
import SongCard from "../elements/songCard";
import lodash from "lodash";

const SearchPage = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { value } = useParams();
  const data = useLoaderData();

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
          {path.pathname.includes("songs") ? (
            lodash.isEmpty(data) ? (
              <h5 className="empty__placeholder">
                There's nothing to show here
              </h5>
            ) : (
              data.map((song, index) => <SongCard key={index} data={song} />)
            )
          ) : (
            ""
          )}
          {path.pathname.includes("users") ? (
            lodash.isEmpty(data) ? (
              <h5 className="empty__placeholder">
                There's nothing to show here
              </h5>
            ) : (
              data.map((user, index) => <ArtistCard key={index} data={user} />)
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
