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
      className="bg-gradient1 mt-14 w-full h-[48px] outline-none rounded font-bold text-gray-900  text-lg "
    >
      Follow
    </button>
  );
}

export default FollowBtn;
