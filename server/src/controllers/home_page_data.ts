import prisma_client from "../lib/database";
import { Response, Request } from "express";

export default async function HomePageData(req: Request, res: Response) {
  let id: number = req.user!;

  try {
    let artists = await ArtsitData(id);
    let discover = await SongsData(id);
    let result = { artists, discover };
    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}

async function ArtsitData(id: number) {
  let artsits = await prisma_client.artist.findMany({
    orderBy: { followers: "desc" },
    include: { artist: { select: { artist_id: true }, where: { fan_id: id } } },
    take: 9,
  });

  artsits.forEach((e) => {
    e.password = "";
    e.email = "";
  });

  return artsits;
}

async function SongsData(id: number) {
  let songs = await prisma_client.song.findMany({
    orderBy: { likes: "desc" },
    include: {
      artist: {
        select: {
          id: true,
          username: true,
          followers: true,
          following: true,
          photo_url: true,
          songs_uploaded_number: true,
        },
      },
      like: { where: { fan_id: id }, select: { song_id: true } },
    },
    take: 9,
  });

  return songs;
}
