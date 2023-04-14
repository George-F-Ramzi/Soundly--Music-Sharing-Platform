import prisma_client from "../lib/database";
import { Response, Request } from "express";

export default async function HomePageData(req: Request, res: Response) {
  //
  try {
    let artists = await prisma_client.artist.findMany({
      orderBy: { followers: "desc" },
      select: {
        id: true,
        followers: true,
        photo_url: true,
        username: true,
        songs_uploaded_number: true,
        following: true,
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
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
