import React from "react";
import { RiPlayCircleFill } from "react-icons/ri";

const SongInPlaylist = ({ data }) => {
  return (
    <tr>
      <td>:</td>
      <td>
        <div className="playlist__div">
          <img className="playlist__img" src={data.coverUrl} />
          {data.songName}
        </div>
      </td>
      <td className="artist-field">{data.username}</td>
      <td className="likes-field">{data.likes}</td>
      <td>
        <RiPlayCircleFill size={"32px"} />
      </td>
    </tr>
  );
};

export default SongInPlaylist;
