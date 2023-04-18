import { useEffect, useState } from "react";
import { Follow, IsFollowedPoint, UnFollow } from "../api/authorization";

function IsFollowed({ id }: { id: number }) {
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    let Check = async () => {
      let result = await IsFollowedPoint(id);
      if (result === null) setFollowed(false);
      else setFollowed(true);
    };
    Check();
  }, [id]);

  if (followed)
    return (
      <button
        onClick={async () => {
          await UnFollow(id);
          setFollowed(false);
        }}
        className="mt-16 w-full border border-gray-500 font-bold p-4 rounded mb-8"
      >
        UnFollow
      </button>
    );

  return (
    <button
      onClick={async () => {
        await Follow(id);
        setFollowed(true);
      }}
      className="mt-16 w-full bg-gradient1 text-black font-bold p-4 rounded mb-8"
    >
      Follow
    </button>
  );
}

export default IsFollowed;
