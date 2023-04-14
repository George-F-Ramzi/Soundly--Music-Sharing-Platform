import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function DislikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: number = Number(req.params.song_id);

  try {
    let like_row = await prisma_client.like.findFirst({
      where: { song_id, fan_id: my_id },
      select: { id: true },
    });

    if (like_row === null)
      return res.status(400).send("Something Wrong Happen");

    await prisma_client.like.delete({
      where: { id: like_row.id },
    });

    await prisma_client.song.update({
      where: { id: song_id },
      data: { likes: { decrement: 1 } },
    });

    res.status(200).send("DisLike Done");
  } catch (error) {
    return res.status(400).send("Something Wrong Happen");
  }
}
