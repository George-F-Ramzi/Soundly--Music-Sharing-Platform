import { Song } from "../lib/types.def";
import SongCard from "./songCard";

interface Prop {
  title: String;
  data: Song[];
}
function SongsSection({ title, data }: Prop) {
  return (
    <div className="mt-10">
      <h5 className="text-white font-bold text-3xl mb-8">{title}</h5>
      <div className="grid gap-8 grid-cols-cards ">
        {Array(data) &&
          data.map((song, index) => {
            return <SongCard key={index} data={song} />;
          })}
      </div>
    </div>
  );
}

export default SongsSection;
