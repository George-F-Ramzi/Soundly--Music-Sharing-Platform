import { Artist } from "../lib/types.def";
import ArtistCard from "./artistCard";

interface Prop {
  title: String;
  data: Artist[];
}
function ArtistsSection({ title, data }: Prop) {
  return (
    <div className="mt-10">
      <h5 className="text-white font-bold text-3xl mb-8">{title}</h5>
      <div className="grid gap-8 grid-cols-cards ">
        {Array.isArray(data) &&
          data.map((artist, index) => {
            return <ArtistCard key={index} data={artist} />;
          })}
      </div>
    </div>
  );
}

export default ArtistsSection;
