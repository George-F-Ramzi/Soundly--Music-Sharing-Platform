import { Await, Link, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { InboxCardType } from "../lib/types.def";
import Loading from "../lib/loading";
import NothingHere from "../lib/nothing_here";
import { RiArrowRightCircleLine } from "react-icons/ri";

interface ReturnDefer {
  data: () => Promise<InboxCardType[]>;
}

export default function InboxPage() {
  const { data } = useLoaderData() as ReturnDefer;
  return (
    <div className="h-full max-w-[544px] scrollbar-hide overflow-y-scroll m-auto">
      <h5 className="text-white mt-12 mb-8 font-bold text-xl">Notifications</h5>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(all: InboxCardType[]) => (
            <>
              {Array.isArray(all) && all.length ? (
                all.map((el, index) => {
                  return <InboxCard data={el} key={index} />;
                })
              ) : (
                <NothingHere />
              )}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

function InboxCard({ data }: { data: InboxCardType }) {
  const handleTo = () => {
    if (data.message_detail.includes("Started")) {
      return `/artist/${data.trigger_id}`;
    }
    if (data.message_detail.includes("Commented")) {
      return `/song/${data.song_id}`;
    }
    if (data.message_detail.includes("Likes")) {
      return `/song/${data.song_id}`;
    }
    return `/song/${data.song_id}`;
  };

  return (
    <div className="mb-4 phone:p-3 h-[100px] rounded p-[20px] flex items-center bg-gray-800  text-white">
      <Link to={`/artist/${data.trigger_id}`}>
        <img
          src={data.trigger.photo_url}
          className="w-12 min-w-[72px] phone:min-w-[56px] phone:h-[56px] h-[72px] rounded-full"
        />
      </Link>
      <div className="grow phone:ml-2 ml-4">
        <Link
          to={`/artist/${data.trigger_id}`}
          className="text-gray-300  tablet:text-sm"
        >
          {data.trigger.username}
        </Link>
        <h5 className="font-bold  phone:text-base  phone:mt-1 mt-2 text-lg">
          {data.message_detail}
        </h5>
      </div>
      <Link to={handleTo()}>
        <RiArrowRightCircleLine size={"32px"} />
      </Link>
    </div>
  );
}
