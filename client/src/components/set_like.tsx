import { useEffect, useState } from "react";
import { Dislike, Like } from "../api/authorization";

export default function SetLike({ id, liked }: { id: number; liked: boolean }) {
  const [like, setLike] = useState(true);

  useEffect(() => {
    if (liked) setLike(true);
    else setLike(false);
  }, [id]);

  if (like)
    return (
      <button
        onClick={async () => {
          setLike(false);
          await Dislike(id);
        }}
        className="w-full  bg-gray-700 font-bold h-12 rounded mb-8"
      >
        Dislike
      </button>
    );

  return (
    <button
      onClick={async () => {
        setLike(true);
        await Like(id);
      }}
      className="w-full border border-gray-500 bg-transparent text-white font-bold h-12 rounded mb-8"
    >
      Like
    </button>
  );
}
