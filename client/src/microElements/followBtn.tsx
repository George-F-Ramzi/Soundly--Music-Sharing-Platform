import { Follow } from "../api/authorization";

interface Prop {
  setFollowing: (value: boolean) => void;
  id: number;
}

function FollowBtn({ setFollowing, id }: Prop) {
  return (
    <button
      onClick={async () => {
        setFollowing(true);
        await Follow(id);
      }}
      className="bg-gradient1 mr-1 outline-none rounded w-fit text-gray-900 font-bold text-sm px-4"
    >
      Follow
    </button>
  );
}

export default FollowBtn;
