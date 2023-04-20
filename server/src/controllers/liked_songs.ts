import prisma_client from "../lib/database";
import { Response, Request } from "express";

export default async function LikedSongs(req: Request, res: Response) {
  let my_id = req.user!;

  let songs = await prisma_client.like.findMany({
    where: { fan_id: my_id },
    include: { song: { include: { artist: { select: { username: true } } } } },
  });

  let result = songs.map((s) => {
    return {
      id: s.song.id,
      song_name: s.song.song_name,
      song_cover_url: s.song.song_cover_url,
      song_file_url: s.song.song_file_url,
      artist_id: s.song.artist_id,
      artist: s.song.artist,
    };
  });

  res.status(200).json(result);
}
