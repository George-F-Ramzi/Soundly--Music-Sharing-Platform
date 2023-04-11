import { Await, useLoaderData, useLocation } from "react-router-dom";
import { Artist, ProfilePageType } from "../lib/types.def";
import { Suspense, useEffect, useState } from "react";
import Loading from "../ComponentHelper/loading";
import UnFollowBtn from "../ComponentHelper/unFollowBtn";
import FollowBtn from "../ComponentHelper/followBtn";
import SongsSection from "../Components/songsSection";

interface ReturnDefer {
  data: (id: string) => Promise<ProfilePageType>;
}

function ProfilePage() {
  const [followed, setFollowed] = useState(false);
  const { data } = useLoaderData() as ReturnDefer;
  const location = useLocation();
  let profile: Artist = location.state.profile;
  let myId = localStorage.getItem("myId");

  useEffect(() => {
    if (profile.followed != null) setFollowed(true);
    else setFollowed(false);
  }, [profile]);

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={profile.photoUrl}
        />
        <h1 className="font-bold tablet:text-xl text-5xl mb-7">
          {profile.username}
        </h1>
        <div className="flex">
          <p className="text-base tablet:text-sm mr-4 font-bold text-gray-300">
            {profile.followers}:Followers
          </p>
          <p className="text-base tablet:text-sm mr-4 font-bold text-gray-300">
            {profile.following}:Following
          </p>
          <p className="text-base tablet:text-sm font-bold text-gray-300">
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
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {({ uploadedSongs, likedSongs }: ProfilePageType) => (
            <>
              <SongsSection data={uploadedSongs} title={"Uploaded Songs"} />
              <SongsSection data={likedSongs} title={"Liked Songs"} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default ProfilePage;
