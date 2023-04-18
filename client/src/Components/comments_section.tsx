import { useEffect, useState } from "react";
import { PostComment } from "../api/authorization";
import { IArtist, IComment } from "../lib/types.def";
import CommentCard from "../ComponentHelper/comment_card";

function CommentsSection({ data, id }: { data: IComment[]; id: number }) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [Ivalue, setInput] = useState("");

  let my_profile = JSON.parse(localStorage.getItem("my_profile")!) as IArtist;

  useEffect(() => {
    setComments(data);
  }, [data]);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let form: FormData = new FormData(e.currentTarget);
          let clone: IComment[] = JSON.parse(JSON.stringify(comments));
          clone.push({
            artist: my_profile,
            artist_id: Math.random(),
            details: Ivalue,
            id: Math.random(),
            song_id: Math.random(),
          });
          setComments(clone);
          setInput("");
          await PostComment(form, id);
        }}
        className="mt-20 w-full"
      >
        <input
          className="w-full h-16 rounded-full font-bold bg-gray-800 p-4 text-white"
          placeholder="what's on your mind?"
          required
          minLength={1}
          name="details"
          value={Ivalue}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
      {Array.isArray(comments)
        ? comments.map((c, i) => {
            return <CommentCard key={i} data={c} />;
          })
        : ""}
    </>
  );
}

export default CommentsSection;
