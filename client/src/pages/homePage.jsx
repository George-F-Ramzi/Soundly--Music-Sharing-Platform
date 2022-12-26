import React from "react";
import { Link } from "react-router-dom";
import ArtistsSection from "../elements/artistsSection";
import SongsSection from "../elements/songsSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="landing-ad">
        <h3 className="ad__title">
          You can now share music with your followers
        </h3>
        <Link to={"/upload"}>
          <button className="ad__btn">Start Uploading Now</button>
        </Link>
        <div className="ad__img"></div>
      </div>
      <SongsSection />
      <ArtistsSection />
    </div>
  );
};

export default HomePage;
