import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Song } from "../lib/types.def";

export default function PlayerBody({ song }: { song: Song }) {
  return (
    <div className="h-[120px]  flex items-center justify-center bg-gray-800 fixed left-0 bottom-0 w-screen">
      <div className="max-w-[1180px] px-4  relative  phone:px-3 py-[10px] w-[1180px] h-full flex ">
        <img
          className="min-w-[100px] tablet:h-[100px]  tablet:absolute w-[100px] tablet:-top-10 tablet:border tablet:border-gray-500 h-full rounded"
          src={song?.coverUrl}
          alt="song-thumbnail"
        />
        <div className="text-white mr-8 tablet:absolute tablet:left-[120px] tablet:top-[4px]  min-w-fit flex-col justify-center flex font-bold ml-4 text-2xl">
          <h5 className="text-xl">{song?.songName}</h5>
          <p className="text-[14px] text-gray-300">{song?.username}</p>
        </div>
        <AudioPlayer
          layout="horizontal"
          showJumpControls={false}
          src={song?.songUrl}
          autoPlay
          className="w-full  mx-4 tablet:mt-10 tablet:ml-0  "
        />
      </div>
    </div>
  );
}
