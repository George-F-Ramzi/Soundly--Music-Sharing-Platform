import { IArtistCard } from "../lib/types.def";
import ArtistCard from "./artist_card";

interface Prop {
  title: String;
  data: IArtistCard[];
}
function ArtistsSection({ title, data }: Prop) {
  return (
    <div className="mt-10">
      <h5 className="text-white font-bold text-2xl mb-8">{title}</h5>
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
