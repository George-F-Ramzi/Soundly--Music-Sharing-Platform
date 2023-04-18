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

    let result = songs.map((s) => {
      return {
        id: s.song.id,
        song_name: s.song.song_name,
        song_cover_url: s.song.song_cover_url,
        song_file_url: s.song.song_file_url,
        likes: s.song.likes,
        artist_id: s.song.artist_id,
        artist: s.song.artist,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
