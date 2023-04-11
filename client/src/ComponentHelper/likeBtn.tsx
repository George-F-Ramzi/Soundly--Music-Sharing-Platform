import { Like } from "../api/authorization";

interface Prop {
  setLiked: (value: boolean) => void;
  id: number;
}

function LikeBtn({ setLiked, id }: Prop) {
  return (
    <button
      onClick={async () => {
        setLiked(true);
        await Like(String(id));
      }}
      className="bg-transparent border border-gray-500 text-gray-300 h-12 w-full rounded font-bold text-xl"
    >
      Like
    </button>
  );
}

export default LikeBtn;
