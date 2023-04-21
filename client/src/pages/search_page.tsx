import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import SongsSection from "../components/songs_section";
import ArtistsSection from "../components/artists_section";
import Loading from "../lib/loading";
import { SearchPageType } from "../lib/types.def";

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
