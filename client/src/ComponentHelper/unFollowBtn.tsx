import { UnFollow } from "../api/authorization";

interface Prop {
  setFollowing: (value: boolean) => void;
  id: number;
}

function UnFollowBtn({ setFollowing, id }: Prop) {
  return (
    <button
      onClick={async () => {
        setFollowing(false);
        await UnFollow(id);
      }}
      className="text-lg w-full h-12 mt-14 font-bold text-gray-300 border-gray-500  rounded  border "
    >
      UnFollow
    </button>
  );
}

export default UnFollowBtn;
