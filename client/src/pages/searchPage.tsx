import React, { useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import ArtistCard from "../elements/artistCard";
import SongCard from "../elements/songCard";

const SearchPage = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const { value } = useParams();
  const data = useLoaderData();
  const [searchValue, setSearchValue] = useState("");

  const Search = () => {
    if (path.pathname.includes("users")) {
      navigate(`/search/users/${searchValue}`);
    } else {
      navigate(`/search/songs/${searchValue}`);
    }
  };

  return (
    <div>
      <div className="search-section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            Search();
          }}
          className="mobile-search"
        >
          <input
            className="input input--big"
            placeholder="What Are You Looking For?"
            value={searchValue}
            onChange={(e) => {
              e.preventDefault();
              setSearchValue(e.currentTarget.value);
            }}
          />
        </form>
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
