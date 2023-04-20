import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Follow(req: Request, res: Response) {
  let my_id: number = req.user!;
  let artist_id: number = Number(req.params.artist_id);

  await prisma_client.follower.create({
    data: { artist_id, fan_id: my_id },
  });

  await prisma_client.artist.update({
    where: { id: my_id },
    data: { following: { increment: 1 } },
  });

  await prisma_client.artist.update({
    where: { id: artist_id },
    data: { followers: { increment: 1 } },
  });

  await prisma_client.notification.create({
    data: {
      message_detail: "Started Following You",
      nottifer_id: artist_id,
      trigger_id: my_id,
    },
  });
  res.status(200).send("Following Done");
}
