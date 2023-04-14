import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function IsFollowed(req: Request, res: Response) {
  let my_id: number = req.user!;
  let artist_id: number = Number(req.params.artist_id);

  try {
    let result = await prisma_client.follower.findFirst({
      where: { fan_id: my_id, artist_id },
    });

    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
