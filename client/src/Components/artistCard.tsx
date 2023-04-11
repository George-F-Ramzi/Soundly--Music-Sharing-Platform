import { useNavigate } from "react-router-dom";
import { Artist } from "../lib/types.def";

function ArtistCard({ data }: { data: Artist }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/profile/${data.id}`, { state: { profile: data } })
      }
      className="w-full cursor-pointer p-[8px] flex items-center  h-[80px] bg-gray-800 text-white rounded-[4px]"
    >
      <img src={data.photoUrl} className="min-w-[64px] h-full rounded" />
      <div className="ml-4 grow ">
        <h5 className="font-bold mb-1 grow">{data.username}</h5>
        <p className="text-gray-300">{data.followers}:Followers</p>
      </div>
    </div>
  );
}

export default ArtistCard;
