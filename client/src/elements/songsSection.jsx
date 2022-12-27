import React from "react";
import SongCard from "../elements/songCard";

const SongsSection = ({ data, name }) => {
  return (
    <div className="section">
      <h3 className="section__title">{name}</h3>
      <div className="section__grid">
        {data.map((song, index) => (
          <SongCard key={index} data={song} />
        ))}
      </div>
    </div>
  );
};

export default SongsSection;
