import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function GetComments(req: Request, res: Response) {
  let song_id: string = req.params.user_id;

  try {
    let comments = await prisma_client.comment.findMany({
      where: { song_id: Number(song_id) },
      include: { artist: true },
    });

    res.status(200).json(comments);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
