import { Await, useLoaderData } from "react-router-dom";
import { ProfilePageType } from "../lib/types.def";
import { Suspense } from "react";
import Loading from "../microElements/loading";
import ProfileBody from "../microElements/profileBody";

interface ReturnDefer {
  data: () => Promise<ProfilePageType>;
}

function ProfilePage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: ProfilePageType) => <ProfileBody data={data} />}
      </Await>
    </Suspense>
  );
}

export default ProfilePage;
