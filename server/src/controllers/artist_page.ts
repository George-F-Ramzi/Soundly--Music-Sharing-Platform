import prisma_client from "../lib/database";
import { Response, Request } from "express";
import { IArtistPage } from "../lib/types.def";

export default async function ArtistPage(req: Request, res: Response) {
  let artist_id = Number(req.params.artist_id);
  let my_id = req.user!;

  let artist_info = await prisma_client.artist.findUnique({
    where: { id: artist_id },
    select: {
      id: true,
      followers: true,
      photo_url: true,
      username: true,
      following: true,
      songs_uploaded_number: true,
    },
  });

  if (artist_info === null) return res.status(400).send("Artist Dosen't Exist");

  let artist_followed = await prisma_client.follower.findUnique({
    where: { artist_id_fan_id: { artist_id, fan_id: my_id } },
  });

  let followed: boolean = false;

  if (artist_followed === null) followed = false;
  else followed = true;

  let artist_songs = await prisma_client.song.findMany({
    where: { artist_id },
    include: { artist: { select: { username: true } } },
  });

  let reuslt: IArtistPage = {
    info: artist_info,
    followed,
    songs: artist_songs,
  };

  res.status(200).json(reuslt);
}
