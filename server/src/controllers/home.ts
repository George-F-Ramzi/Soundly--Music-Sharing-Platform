import prisma_client from "../lib/database";
import { Response } from "express";
import { MYREQEUST } from "../lib/types.def";

export default async function HomePageData(req: MYREQEUST, res: Response) {
  let artists = await prisma_client.artist.findMany({
    orderBy: { followers: "desc" },
    select: {
      id: true,
      followers: true,
      photo_url: true,
      username: true,
    },
    take: 9,
  });

  let discover = await prisma_client.song.findMany({
    orderBy: { likes: "desc" },
    include: { artist: { select: { username: true } } },
    take: 9,
  });

  let result = { artists, discover };
  res.status(200).json(result);
}
