import { InboxCardType } from "../lib/types.def";
import InboxMessage from "../ComponentHelper/inboxMessage";

interface Prop {
  data: InboxCardType;
}

function InboxCard({ data }: Prop) {
  return (
    <div className="mb-8 flex text-white">
      <img
        src={data.photoUrl}
        className="w-12 min-w-[48px]  h-12 rounded-full"
      />
      <div className="grow ml-4">
        <p className="text-gray-300 tablet:text-sm">{data.username}</p>
        <InboxMessage id={data.messageId} />
      </div>
    </div>
  );
}

export default InboxCard;
