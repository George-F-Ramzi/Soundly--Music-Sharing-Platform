import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function UploadedSongs(req: Request, res: Response) {
  let artist_id: number = Number(req.params.artist_id);

  try {
    let songs = await prisma_client.song.findMany({
      where: { artist_id },
    });

    res.status(200).json(songs);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
