import { useNavigate } from "react-router-dom";
import { InboxCardType } from "../lib/types.def";
import InboxMessage from "../microElements/inboxMessage";
import InboxSeeBtn from "../microElements/inboxSeeBtn";

interface Prop {
  data: InboxCardType;
}

function InboxCard({ data }: Prop) {
  const navigate = useNavigate();
  return (
    <div className="mb-8 flex text-white">
      <img
        onClick={() => navigate(`/profile/${data.triggerId}`)}
        src={data.photoUrl}
        className="w-12 min-w-[48px]  h-12 rounded-full"
      />
      <div className="grow ml-4">
        <p
          onClick={() => navigate(`/profile/${data.triggerId}`)}
          className="text-gray-300 tablet:text-sm"
        >
          {data.username}
        </p>
        <InboxMessage id={data.messageId} />
      </div>
      <InboxSeeBtn
        id={data.messageId}
        songId={data.songId}
        triggerId={data.triggerId}
      />
    </div>
  );
}

export default InboxCard;
