import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function LikedSongs(req: Request, res: Response) {
  let id: number = req.user!;

  try {
    let songs = await prisma_client.like.findMany({
      where: { fan_id: id },
      include: {
        song: {
          include: {
            artist: {
              select: {
                id: true,
                followers: true,
                photo_url: true,
                username: true,
                songs_uploaded_number: true,
                following: true,
              },
            },
          },
        },
      },
    });

    res.status(200).json(songs);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
