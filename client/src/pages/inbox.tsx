import { useLoaderData } from "react-router-dom";
import { InboxCardType } from "../lib/types.def";
import InboxCard from "../elements/inboxCard";

function Inbox() {
  const data = useLoaderData() as InboxCardType[];
  return (
    <div className="h-full max-w-[544px] scrollbar-hide overflow-y-scroll m-auto">
      <h5 className="text-white mt-12 mb-8 font-bold text-xl">Notifications</h5>

      {Array(data) &&
        data.map((c) => {
          return <InboxCard data={c} />;
        })}
    </div>
  );
}

export default Inbox;
