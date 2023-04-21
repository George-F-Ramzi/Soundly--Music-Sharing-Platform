import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { IArtistPage, IME } from "../lib/types.def";
import SongsSection from "../components/songs_section";
import Loading from "../lib/loading";
import SetFollow from "../components/set_follow";

interface ReturnDefer {
  data: (id: string) => Promise<IArtistPage>;
}

export default function ArtistPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: IArtistPage) => <PageBody data={data} />}
      </Await>
    </Suspense>
  );
}

function PageBody({ data }: { data: IArtistPage }) {
  let me: IME = JSON.parse(localStorage.getItem("me")!);

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={data.info.photo_url}
        />
        <h1 className="font-bold tablet:text-xl text-5xl mb-7">
          {data.info.username}
        </h1>
        <div className="flex">
          <p className="text-base tablet:text-sm mr-4 font-bold text-gray-300">
            {data.info.followers}:Followers
          </p>
          <p className="text-base tablet:text-sm mr-4 font-bold text-gray-300">
            {data.info.following}:Following
          </p>
          <p className="text-base tablet:text-sm font-bold text-gray-300">
            {data.info.songs_uploaded_number}:Songs
          </p>
        </div>
        {me.id == data.info.id ? (
          ""
        ) : (
          <SetFollow id={data.info.id} followed={data.followed} />
        )}
      </div>
      <SongsSection data={data.songs} title={"Uploaded Songs"} />
    </div>
  );
}
