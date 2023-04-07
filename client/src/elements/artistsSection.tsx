import React from "react";
import ArtistCard from "../elements/artistCard";

const ArtistsSection = ({ data, name }) => {
  return (
    <div className="section">
      <h3 className="section__title">{name}</h3>
      <div className="section__grid">
        {data.map((artist, index) => (
          <ArtistCard key={index} data={artist} />
        ))}
      </div>
    </div>
  );
};

export default ArtistsSection;
