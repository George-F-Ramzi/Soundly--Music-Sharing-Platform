import { Dislike } from "../api/authorization";

interface Prop {
  setLiked: (value: boolean) => void;
  id: number;
}

function DislikeBtn({ setLiked, id }: Prop) {
  return (
    <button
      onClick={async () => {
        setLiked(false);
        await Dislike(String(id));
      }}
      className="bg-gray-500   text-black h-12 w-full rounded font-bold text-xl"
    >
      Dislike
    </button>
  );
}

export default DislikeBtn;
