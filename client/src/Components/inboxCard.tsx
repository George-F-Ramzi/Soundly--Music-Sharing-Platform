import { InboxPageType } from "../lib/types.def";

interface Prop {
  data: InboxPageType;
}

function InboxCard({ data }: Prop) {
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

export default InboxCard;
