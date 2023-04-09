import { useEffect, useState } from "react";
import { Artist } from "../lib/types.def";
import FollowBtn from "../microElements/followBtn";
import UnFollowBtn from "../microElements/unFollowBtn";

function ArtistCard({ data }: { data: Artist }) {
  const [following, setFollowing] = useState<boolean>(false);
  useEffect(() => {
    data.following ? setFollowing(true) : setFollowing(false);
  }, [data]);

  return (
    <div className="w-full p-[8px] flex items-center  h-[80px] bg-gray-800 text-white rounded-[4px]">
      <img src={data.photoUrl} className="min-w-[64px] h-full rounded" />
      <div className="ml-4 grow ">
        <div className="flex  mb-1">
          <h5 className="font-bold grow">{data.username}</h5>
          {following ? (
            <UnFollowBtn id={data.id} setFollowing={setFollowing} />
          ) : (
            <FollowBtn id={data.id} setFollowing={setFollowing} />
          )}
        </div>
        <p className="text-gray-300">{data.followers}:Followers</p>
      </div>
    </div>
  );
}

export default ArtistCard;
