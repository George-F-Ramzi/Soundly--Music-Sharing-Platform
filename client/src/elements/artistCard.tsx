import { Artist } from "../lib/types.def";
import FollowBtn from "../microElements/followBtn";
import UnFollowBtn from "../microElements/unFollowBtn";

function ArtistCard({ data }: { data: Artist }) {
  return (
    <div className="w-full p-[10px] flex  h-[100px] bg-gray-800 text-white rounded-[4px]">
      <img src={data.photoUrl} className="min-w-[80px] h-full rounded" />
      <div className="ml-4">
        <h5 className="font-bold mb-1">{data.username}</h5>
        <p className="text-gray-300">{data.followers}:Followers</p>
        {data.following ? <UnFollowBtn /> : <FollowBtn />}
      </div>
    </div>
  );
}

export default ArtistCard;
