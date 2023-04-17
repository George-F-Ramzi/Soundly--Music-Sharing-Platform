import { Await, useLoaderData, useLocation } from "react-router-dom";
import { IArtist, ISongCard } from "../lib/types.def";
import { Suspense } from "react";
import SongsSection from "../Components/songsSection";
import Loading from "../ComponentHelper/loading";
import IsFollowed from "../ComponentHelper/isFollowed";

interface ReturnDefer {
  data: (id: string) => Promise<ISongCard[]>;
}

function ProfilePage() {
  const { data } = useLoaderData() as ReturnDefer;
  const location = useLocation();
  let profile: IArtist = location.state.profile;
  let my_id = Number(localStorage.getItem("my_id"));

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={profile.photo_url}
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
            {profile.songs_uploaded_number}:Songs
          </p>
        </div>
        <IsFollowed id={profile.id} />
      </div>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(data: ISongCard[]) => (
            <SongsSection data={data} title={"Uploaded Songs"} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default ProfilePage;
