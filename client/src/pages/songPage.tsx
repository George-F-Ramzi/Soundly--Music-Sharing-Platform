import { Await, useLoaderData, useLocation } from "react-router-dom";
import { IComment, ISongCard } from "../lib/types.def";
import { Suspense, useContext } from "react";
import Loading from "../ComponentHelper/loading";
import PlayerContext from "../ComponentHelper/playerContext";
import IsLiked from "../ComponentHelper/is_liked";
import CommentsSection from "../Components/comments_section";

interface ReturnDefer {
  data: (id: string) => Promise<IComment[]>;
}

function SongPage() {
  const { data } = useLoaderData() as ReturnDefer;
  const { setSong } = useContext(PlayerContext);

  const location = useLocation();
  let song: ISongCard = location.state.song;

  return (
    <div className="mt-16 pb-36 text-white">
      <div className="flex flex-col items-center">
        <img
          className="min-w-[100px]  max-h-[100px] rounded mb-10"
          src={song.song_cover_url}
        />
        <h1 className="font-bold tablet:text-xl text-5xl mb-7">
          {song.song_name}
        </h1>
        <div className="flex">
          <p className="text-base tablet:text-sm  font-bold text-gray-300">
            {song.likes}:Likes
          </p>
        </div>
        <div className="mt-14 w-full h-12 grid grid-cols-2 gap-6">
          <button
            onClick={() => setSong!(song)}
            className="bg-gradient1 h-12 w-full  rounded font-bold text-black text-xl"
          >
            Play
          </button>
          <IsLiked id={song.id} />
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(data: IComment[]) => <CommentsSection data={data} id={song.id} />}
        </Await>
      </Suspense>
    </div>
  );
}

export default SongPage;
