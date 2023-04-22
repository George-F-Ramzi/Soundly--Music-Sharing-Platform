import prisma_client from "../lib/database";
import { Response } from "express";
import { ISongPage, MYREQEUST } from "../lib/types.def";

export default async function SongPage(req: MYREQEUST, res: Response) {
  let song_id = Number(req.params.song_id);
  let my_id = req.user!;

  let song_info = await prisma_client.song.findUnique({
    where: { id: song_id },
    include: { artist: { select: { username: true } } },
  });

  if (song_info === null) return res.status(400).send("Song Dosen't Exist");

  let song_liked = await prisma_client.like.findUnique({
    where: { song_id_fan_id: { song_id, fan_id: my_id } },
  });

  let liked: boolean = false;

  if (song_liked === null) liked = false;
  else liked = true;

  let song_comments = await prisma_client.comment.findMany({
    where: { song_id },
    include: { artist: { select: { username: true, photo_url: true } } },
  });

  let reuslt: ISongPage = {
    info: song_info,
    liked,
    comments: song_comments,
  };

  res.status(200).json(reuslt);
}
