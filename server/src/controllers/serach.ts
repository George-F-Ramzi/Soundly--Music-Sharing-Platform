import { Response } from "express";
import prisma_client from "../lib/database";
import { MYREQEUST } from "../lib/types.def";

export default async function Search(req: MYREQEUST, res: Response) {
  let query: string = req.params.query;

  let artists = await prisma_client.artist.findMany({
    where: { username: { search: `${query}*` } },
    select: {
      id: true,
      followers: true,
      photo_url: true,
      username: true,
    },
  });

  let songs = await prisma_client.song.findMany({
    where: { song_name: { search: `${query}*` } },
    include: {
      artist: {
        select: {
          username: true,
        },
      },
    },
  });

  let result = { songs, artists };

  return res.status(200).json(result);
}
