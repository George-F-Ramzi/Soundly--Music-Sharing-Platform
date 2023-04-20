import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function LikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: number = Number(req.params.song_id);

  let song_row = await prisma_client.song.findUnique({
    where: { id: song_id },
    select: { artist_id: true },
  });

  if (song_row === null) return res.status(400).send("Something Wrong Happen");

  await prisma_client.like.create({
    data: { fan_id: my_id, song_id },
  });

  await prisma_client.song.update({
    where: { id: song_id },
    data: { likes: { increment: 1 } },
  });

  await prisma_client.notification.create({
    data: {
      message_detail: "Likes Your Song",
      nottifer_id: song_row.artist_id,
      trigger_id: my_id,
      song_id,
    },
  });
  res.status(200).send("Like Done");
}
