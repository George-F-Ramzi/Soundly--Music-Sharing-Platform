import { Suspense } from "react";
import Loading from "../ComponentHelper/loading";
import { Await, useLoaderData } from "react-router-dom";
import SongsSection from "../Components/songsSection";
import { ISongCard } from "../lib/types.def";

interface ReturnDefer {
  data: () => Promise<ISongCard[]>;
}

function LikedPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(data: ISongCard[]) => (
            <SongsSection data={data} title={"Liked Songs"} />
          )}
        </Await>
      </Suspense>
    </>
  );
}

export default LikedPage;
