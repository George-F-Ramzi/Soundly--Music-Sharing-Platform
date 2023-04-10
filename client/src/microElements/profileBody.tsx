import { useEffect, useState } from "react";
import SongsSection from "../elements/songsSection";
import { ProfilePageType } from "../lib/types.def";
import FollowBtn from "./followBtn";
import UnFollowBtn from "./unFollowBtn";

export default function ProfileBody({ data }: { data: ProfilePageType }) {
  const [followed, setFollowed] = useState(false);
  let myId = localStorage.getItem("myId");

  let { profile, likedSongs, uploadedSongs } = data;

  useEffect(() => {
    if (profile.Followed === null) setFollowed(false);
    else setFollowed(true);
  }, [profile]);

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={profile.photoUrl}
        />
        <h1 className="font-bold text-5xl mb-7">{profile.username}</h1>
        <div className="flex">
          <p className="text-base mr-4 font-bold text-gray-300">
            {profile.followers}:Followers
          </p>
          <p className="text-base mr-4 font-bold text-gray-300">
            {profile.following}:Following
          </p>
          <p className="text-base font-bold text-gray-300">
            {profile.songs}:Songs
          </p>
        </div>
        {myId !== String(profile.id) ? (
          followed ? (
            <UnFollowBtn id={profile.id} setFollowing={setFollowed} />
          ) : (
            <FollowBtn id={profile.id} setFollowing={setFollowed} />
          )
        ) : (
          ""
        )}
      </div>
      <SongsSection data={uploadedSongs} title={"Uploaded Songs"} />
      <SongsSection data={likedSongs} title={"Liked Songs"} />
    </div>
  );
}
