import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArtistsSection from "../elements/artistsSection";
import SongsSection from "../elements/songsSection";
import { Discover, Artists } from "../api/authorization";
import SectionPlacholder from "../elements/sectionPlacholder";

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
        <img src="https://res.cloudinary.com/dwnvkwrox/image/upload/v1680784794/Landing_Image_q59zvq.png" />
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
