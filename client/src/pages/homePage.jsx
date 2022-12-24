import React from "react";
import NavBar from "../elements/navBar";
import SongCard from "../elements/songCard";
import ArtistCard from "../elements/artistCard";
import SongInPlaylist from "../elements/songInPlaylist";
import { Link, useLoaderData } from "react-router-dom";
import lodash from "lodash";

const HomePage = () => {
  const data = useLoaderData();
  return (
    <div className="home-page">
      <NavBar />
      <div className="landing-ad">
        <div className="ad-left">
          <h3 className="ad__title">
            You can now share music with your followers
          </h3>
          <Link to={"/upload"}>
            <button className="ad__btn">Start Uploading Now</button>
          </Link>
        </div>
        <div className="ad__img"></div>
      </div>
      <div className="section">
        <h3 className="section__title">Discover</h3>
        <div className="section__grid">
          {data.Discover.map((song, index) => (
            <SongCard key={index} data={song} />
          ))}
        </div>
      </div>
      <div className="section">
        <h3 className="section__title">Popular Artists</h3>
        <div className="section__grid">
          {data.Artists.map((artist, index) => (
            <ArtistCard key={index} data={artist} />
          ))}
        </div>
      </div>
      <div className="section">
        <h3 className="section__title">Playlist Of The Week</h3>
        <div className="playist">
          <table>
            <thead>
              <tr>
                <th>:</th>
                <th>
                  <div className="playlist__div">
                    <div className="playlist__img"></div>
                    Song Name
                  </div>
                </th>
                <th className="artist-field">Artist Name</th>
                <th className="likes-field">Likes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
              <SongInPlaylist />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
