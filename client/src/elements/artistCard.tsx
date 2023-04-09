import { Artist } from "../lib/types.def";
import FollowBtn from "../microElements/followBtn";
import UnFollowBtn from "../microElements/unFollowBtn";

function ArtistCard({ data }: { data: Artist }) {
  return (
    <div className="w-full p-[8px] flex items-center  h-[80px] bg-gray-800 text-white rounded-[4px]">
      <img src={data.photoUrl} className="min-w-[64px] h-full rounded" />
      <div className="ml-4 grow ">
        <div className="flex  mb-1">
          <h5 className="font-bold grow">{data.username}</h5>
          {data.following ? <UnFollowBtn /> : <FollowBtn />}
        </div>
        <p className="text-gray-300">{data.followers}:Followers</p>
      </div>
    </div>
  );
}

export default ArtistCard;
