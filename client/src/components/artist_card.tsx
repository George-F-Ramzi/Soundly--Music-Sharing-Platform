import { Link } from "react-router-dom";
import { IArtistCard } from "../lib/types.def";

function ArtistCard({ data }: { data: IArtistCard }) {
  return (
    <Link
      to={`/artist/${data.id}`}
      className="w-full cursor-pointer p-[8px] flex items-center  h-[80px] bg-gray-800 text-white rounded-[4px]"
    >
      <img src={data.photo_url} className="min-w-[64px] h-full rounded" />
      <div className="ml-4 grow ">
        <h5 className="font-bold mb-1 grow">{data.username}</h5>
        <p className="text-gray-300">{data.followers}:Followers</p>
      </div>
    </Link>
  );
}

export default ArtistCard;
