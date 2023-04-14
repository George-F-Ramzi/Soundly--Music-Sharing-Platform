import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function IsLiked(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: number = Number(req.params.song_id);

  try {
    let result = await prisma_client.like.findFirst({
      where: { fan_id: my_id, song_id },
    });

    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
