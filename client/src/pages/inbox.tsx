import { Await, useLoaderData } from "react-router-dom";
import { InboxCardType } from "../lib/types.def";
import InboxCard from "../Components/inboxCard";
import { Suspense } from "react";
import Loading from "../ComponentHelper/loading";

interface ReturnDefer {
  data: () => Promise<InboxCardType[]>;
}

function Inbox() {
  const { data } = useLoaderData() as ReturnDefer;
  return (
    <div className="h-full max-w-[544px] scrollbar-hide overflow-y-scroll m-auto">
      <h5 className="text-white mt-12 mb-8 font-bold text-xl">Notifications</h5>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(all: InboxCardType[]) => (
            <>
              {Array.isArray(all) &&
                all.map((el, index) => {
                  return <InboxCard data={el} key={index} />;
                })}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Inbox;
