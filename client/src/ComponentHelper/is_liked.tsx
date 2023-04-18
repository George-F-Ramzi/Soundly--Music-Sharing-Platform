import { useEffect, useState } from "react";
import { Dislike, IsLikedPoint, Like } from "../api/authorization";

function IsLiked({ id }: { id: number }) {
  const [liked, setLiked] = useState(true);

  useEffect(() => {
    let Check = async () => {
      let result = await IsLikedPoint(id);
      if (result === null) setLiked(false);
      else setLiked(true);
    };
    Check();
  }, [id]);

  if (liked)
    return (
      <button
        onClick={async () => {
          await Dislike(id);
          setLiked(false);
        }}
        className="w-full  bg-gray-700 font-bold h-12 rounded mb-8"
      >
        Dislike
      </button>
    );

  return (
    <button
      onClick={async () => {
        await Like(id);
        setLiked(true);
      }}
      className="w-full border border-gray-500 bg-transparent text-white font-bold h-12 rounded mb-8"
    >
      Like
    </button>
  );
}

export default IsLiked;
