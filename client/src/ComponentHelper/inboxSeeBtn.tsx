import { useNavigate } from "react-router-dom";

interface Prop {
  id: number;
  songId: number;
  triggerId: number;
}

function InboxSeeBtn({ id, songId, triggerId }: Prop) {
  const navigate = useNavigate();
  if (id === 1) {
    return (
      <button
        onClick={() => navigate(`/song/${songId}`)}
        className="bg-gradient1 px-6 max-w-[78px] max-h-[48px] text-black rounded-full py-1 font-bold"
      >
        See
      </button>
    );
  }
  if (id === 2) {
    return (
      <button
        onClick={() => navigate(`/profile/${triggerId}`)}
        className="bg-gradient1 px-6 max-w-[78px] max-h-[48px] text-black rounded-full py-1 font-bold"
      >
        See
      </button>
    );
  }

  return (
    <button
      onClick={() => navigate(`/song/${songId}`)}
      className="bg-gradient1 px-6 max-w-[78px] max-h-[48px] text-black rounded-full py-1 font-bold"
    >
      See
    </button>
  );
}

export default InboxSeeBtn;
