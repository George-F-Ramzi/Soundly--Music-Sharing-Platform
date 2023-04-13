import { Artist } from "@prisma/client";
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

interface IArtist extends Artist {
  fan?: number | null;
}

async function ArtsitData(id: number) {
  let artsits = (await prisma_client.artist.findMany({
    orderBy: { followers: "desc" },
    select: {
      id: true,
      username: true,
      followers: true,
      following: true,
      photo_url: true,
      songs_uploaded_number: true,
    },
    take: 9,
  })) as IArtist[];

  let artsits_id = artsits.map((e) => {
    return e.id;
  });

  let fan_to_artist = await prisma_client.follower.findMany({
    where: { artist_id: { in: artsits_id }, fan_id: id },
    select: { artist_id: true },
  });

  artsits.forEach((a) => {
    for (let index = 0; index < fan_to_artist.length; index++) {
      if (a.id === fan_to_artist[index].artist_id)
        a.fan = fan_to_artist[index].artist_id;
    }
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
