import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { InboxCardType } from "../lib/types.def";
import Loading from "../lib/loading";
import NothingHere from "../lib/nothing_here";

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
  return (
    <div className="mb-8 flex text-white">
      <img
        src={data.nottifer.photo_url}
        className="w-12 min-w-[48px]  h-12 rounded-full"
      />
      <div className="grow ml-4">
        <p className="text-gray-300 tablet:text-sm">{data.nottifer.username}</p>
        <h5 className="font-bold text-lg">{data.message_detail}</h5>
      </div>
    </div>
  );
}
