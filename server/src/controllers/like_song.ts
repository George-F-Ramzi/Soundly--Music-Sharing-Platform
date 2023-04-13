import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function LikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: string = req.params.user_id;
  let nottifier_id: string = req.params.user_id;

  try {
    await prisma_client.like.create({
      data: { fan_id: my_id, song_id: Number(song_id) },
    });

    await prisma_client.song.update({
      where: { id: Number(song_id) },
      data: { likes: { increment: 1 } },
    });

    await prisma_client.notification.create({
      data: {
        message_detail: "Likes Your Song",
        nottifer_id: Number(nottifier_id),
        trigger_id: my_id,
        song_id: Number(song_id),
      },
    });
    res.status(200).send("Like Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
