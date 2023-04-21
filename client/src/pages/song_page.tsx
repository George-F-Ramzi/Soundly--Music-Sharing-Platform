import { Await, useLoaderData } from "react-router-dom";
import { Suspense, useContext } from "react";
import { ISongPage } from "../lib/types.def";
import Loading from "../lib/loading";
import PlayerContext from "../lib/player_context";
import SetLike from "../components/set_like";
import CommentsSection from "../components/comments_section";

interface ReturnDefer {
  data: (id: string) => Promise<ISongPage>;
}

export default function SongPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: ISongPage) => <PageBody data={data} />}
      </Await>
    </Suspense>
  );
}

function PageBody({ data }: { data: ISongPage }) {
  const { setSong } = useContext(PlayerContext);

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={data.info.song_cover_url}
        />
        <h1 className="font-bold tablet:text-xl text-5xl mb-7">
          {data.info.song_name}
        </h1>
        <div className="flex">
          <p className="text-base tablet:text-sm  font-bold text-gray-300">
            {data.info.likes}:Likes
          </p>
        </div>
        <div className="mt-14 w-full h-12 grid grid-cols-2 gap-6">
          <button
            onClick={() => setSong!(data.info)}
            className="bg-gradient1 h-12 w-full  rounded font-bold text-black text-xl"
          >
            Play
          </button>
          <SetLike id={data.info.id} liked={data.liked} />
        </div>
      </div>
      <CommentsSection data={data.comments} id={data.info.id} />
    </div>
  );
}
