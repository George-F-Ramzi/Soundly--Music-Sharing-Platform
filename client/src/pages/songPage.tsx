import { Await, useLoaderData } from "react-router-dom";
import { ProfilePageType } from "../lib/types.def";
import { Suspense } from "react";
import Loading from "../ComponentHelper/loading";
import ProfileBody from "../ComponentHelper/profileBody";

interface ReturnDefer {
  data: (id: string) => Promise<ProfilePageType>;
}

function SongPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: ProfilePageType) => <ProfileBody data={data} />}
      </Await>
    </Suspense>
  );
}

export default SongPage;
