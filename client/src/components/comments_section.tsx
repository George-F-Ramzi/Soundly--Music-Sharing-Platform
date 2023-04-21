import { useEffect, useState } from "react";
import { IComment, IME } from "../lib/types.def";
import { PostComment } from "../api/authorization";
import { Link } from "react-router-dom";

function CommentsSection({ data, id }: { data: IComment[]; id: number }) {
  const [comments, setComments] = useState<IComment[]>([]);
  const [Ivalue, setInput] = useState("");
  let me: IME = JSON.parse(localStorage.getItem("me")!);

  useEffect(() => {
    setComments(data);
  }, [data]);

  const HandlePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form: FormData = new FormData(e.currentTarget);
    let clone: IComment[] = JSON.parse(JSON.stringify(comments));
    clone.push({
      artist_id: me.id,
      details: Ivalue,
      id: Math.random(),
      song_id: id,
      artist: me,
    });
    setComments(clone);
    setInput("");
    await PostComment(form, id);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          HandlePost(e);
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
    </div>
  );
}

export default CommentsSection;

//

function CommentCard({ data }: { data: IComment }) {
  return (
    <div className="mt-8 flex">
      <Link to={`/artist/${data.artist_id}`}>
        <img
          src={data.artist.photo_url}
          className="max-w-12 w-12 h-12 mr-4 rounded-full"
        />
      </Link>
      <div className="h-fit  p-4 max-w-[512px] rounded-lg bg-gray-800">
        <Link to={`/artist/${data.artist_id}`} className="font-bold text-white">
          {data.artist.username}
        </Link>
        <div className="font-bold mt-4 text-gray-300">{data.details}</div>
      </div>
    </div>
  );
}
