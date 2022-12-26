import React from "react";
import ArtistCard from "../elements/artistCard";

const ArtistsSection = () => {
  return (
    <div className="section">
      <h3 className="section__title">Popular Artists</h3>
      <div className="section__grid">
        {data.map((artist, index) => (
          <ArtistCard key={index} data={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
