import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function DislikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: string = req.params.user_id;

  try {
    let like_row = await prisma_client.like.findFirst({
      where: { fan_id: my_id, song_id: Number(song_id) },
      select: { id: true },
    });

    if (like_row === null) {
      return res.status(400).json("You don't Like this Song");
    }

    await prisma_client.like.delete({ where: { id: like_row.id } });

    await prisma_client.song.update({
      where: { id: Number(song_id) },
      data: { likes: { decrement: 1 } },
    });

    res.status(200).send("Like Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
