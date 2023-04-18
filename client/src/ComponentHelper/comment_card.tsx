import { IComment } from "../lib/types.def";

function CommentCard({ data }: { data: IComment }) {
  return (
    <div className="mt-8 flex">
      <img
        src={data.artist.photo_url}
        className="max-w-12 w-12 h-12 mr-4 rounded-full"
      />
      <div className="h-fit  p-4 max-w-[512px] rounded-lg bg-gray-800">
        <h5 className="font-bold text-white">{data.artist.username}</h5>
        <div className="font-bold mt-4 text-gray-300">{data.details}</div>
      </div>
    </div>
  );
}

export default CommentCard;
