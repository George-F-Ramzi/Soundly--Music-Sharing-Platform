import { useEffect, useState } from "react";
import { Follow, UnFollow } from "../api/authorization";

function SetFollow({ id, followed }: { id: number; followed: boolean }) {
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    if (followed) setFollowing(true);
    else setFollowing(false);
  }, [followed]);

  if (following)
    return (
      <button
        onClick={async () => {
          setFollowing(false);
          await UnFollow(id);
        }}
        className="mt-16 w-full border border-gray-500 font-bold p-4 rounded mb-8"
      >
        UnFollow
      </button>
    );

  return (
    <button
      onClick={async () => {
        setFollowing(true);
        await Follow(id);
      }}
      className="mt-16 w-full bg-gradient1 text-black font-bold p-4 rounded mb-8"
    >
      Follow
    </button>
  );
}

export default SetFollow;
