import { Await, Link, useLoaderData } from "react-router-dom";
import { HomePageType } from "../lib/types.def";
import SongsSection from "../elements/songsSection";
import ArtistsSection from "../elements/artistsSection";
import { Suspense } from "react";
import Loading from "../microElements/loading";

interface ReturnDefer {
  data: () => Promise<HomePageType>;
}

const HomePage = () => {
  const { data } = useLoaderData() as ReturnDefer;

  return (
    <div className="mt-20 pb-36">
      <div className="h-[320px] phone:p-2 p-8 bg-gray-800 rounded-[16px] flex justify-center flex-col tablet:items-center relative">
        <h3 className="text-white tablet:text-center phone:text-3xl font-bold text-[32px] max-w-[416px] leading-[150%] ">
          You can now share music with your followers
        </h3>
        <Link
          className="h-12 w-fit mt-7 rounded-full font-bold px-7 flex items-center justify-center bg-gradient1"
          to={"/upload"}
        >
          Start Uploading Now
        </Link>
        <img
          className="absolute right-8 bottom-0 tablet:hidden"
          src="https://res.cloudinary.com/dwnvkwrox/image/upload/v1680784794/Landing_Image_q59zvq.png"
        />
      </div>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(data: HomePageType) => (
            <>
              <SongsSection title={"Discover"} data={data.discover} />
              <ArtistsSection title={"Popular Artists"} data={data.artists} />
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default HomePage;
