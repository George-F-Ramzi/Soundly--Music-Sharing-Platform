import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtistsSection from "../elements/artistsSection";
import SongsSection from "../elements/songsSection";
import { Discover, Artists } from "../api/authApi";
import lodash from "lodash";
import SectionPlacholder from "../elements/sectionPlacholder";
import { toast } from "react-toastify";

const HomePage = () => {
  const [discover, setDiscover] = useState();
  const [artists, setArtists] = useState();

  useEffect(() => {
    trackSection();
  }, []);

  const trackSection = async () => {
    try {
      const data1 = await Discover();
      setDiscover(data1);
      const data2 = await Artists();
      setArtists(data2);
    } catch (error) {
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  return (
    <div className="home-page">
      <div className="landing-ad">
        <h3 className="ad__title">
          You can now share music with your followers
        </h3>
        <Link className="ad__btn" to={"/upload"}>
          Start Uploading Now
        </Link>
        <div className="ad__img"></div>
      </div>
      {lodash.isEmpty(discover) ? (
        <SectionPlacholder />
      ) : (
        <SongsSection data={discover} name={"Discover"} />
      )}
      {lodash.isEmpty(artists) ? (
        <SectionPlacholder />
      ) : (
        <ArtistsSection data={artists} name={"Popular Artists"} />
      )}
    </div>
  );
};

export default HomePage;
