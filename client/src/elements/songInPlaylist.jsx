import React from "react";
import { RiPlayCircleFill } from "react-icons/ri";

const SongInPlaylist = () => {
  return (
    <tr>
      <td>:</td>
      <td>
        <div className="playlist__div">
          <img className="playlist__img" src="https://picsum.photos/200/300" />
          Song Name
        </div>
      </td>
      <td className="artist-field">Arisit Name</td>
      <td className="likes-field">Likes</td>
      <td>
        <RiPlayCircleFill size={"32px"} />
      </td>
    </tr>
  );
};

export default SongInPlaylist;
