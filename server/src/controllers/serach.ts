import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Search(req: Request, res: Response) {
  let query: string = req.params.query;

  try {
    let artists = await prisma_client.artist.findMany({
      where: { username: { search: `${query}*` } },
      select: {
        id: true,
        followers: true,
        photo_url: true,
        username: true,
        songs_uploaded_number: true,
        following: true,
      },
    });

    let songs = await prisma_client.song.findMany({
      where: { song_name: { search: `${query}*` } },
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
    });

    let result = { songs, artists };

    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(error);
  }
}
