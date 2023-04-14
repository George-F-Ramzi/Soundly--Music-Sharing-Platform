import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function UnFollow(req: Request, res: Response) {
  let my_id: number = req.user!;
  let artist_id: number = Number(req.params.artist_id);

  try {
    let follower_row = await prisma_client.follower.findFirst({
      where: { fan_id: my_id, artist_id },
      select: { id: true },
    });

    if (follower_row === null) {
      return res.status(400).json("You don't follow this user");
    }

    await prisma_client.follower.delete({ where: { id: follower_row.id } });
    await prisma_client.artist.update({
      where: { id: my_id },
      data: { following: { decrement: 1 } },
    });

    await prisma_client.artist.update({
      where: { id: artist_id },
      data: { followers: { decrement: 1 } },
    });

    res.status(200).send("UnFollowing Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
