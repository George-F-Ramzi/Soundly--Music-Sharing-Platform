import { Suspense } from "react";
import { SearchPageType } from "../lib/types.def";
import Loading from "../ComponentHelper/loading";
import { Await, useLoaderData } from "react-router-dom";
import ArtistsSection from "../Components/artistsSection";
import SongsSection from "../Components/songsSection";

interface ReturnDefer {
  data: (value: string) => Promise<SearchPageType>;
}

function SearchPage() {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data}>
        {(data: SearchPageType) => (
          <div className="mt-20">
            <SongsSection data={data.songs} title={"Songs"} />
            <ArtistsSection data={data.artists} title={"Artists"} />
          </div>
        )}
      </Await>
    </Suspense>
  );
}

export default SearchPage;
