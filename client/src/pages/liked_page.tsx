import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { ISongCard } from "../lib/types.def";
import SongsSection from "../components/songs_section";
import Loading from "../lib/loading";

interface ReturnDefer {
  data: () => Promise<ISongCard[]>;
}

function LikedPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: ISongCard[]) => (
          <SongsSection data={data} title={"Liked Songs"} />
        )}
      </Await>
    </Suspense>
  );
}

export default LikedPage;
