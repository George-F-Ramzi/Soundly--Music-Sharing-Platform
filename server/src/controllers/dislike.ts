import { Response } from "express";
import prisma_client from "../lib/database";
import { MYREQEUST } from "../lib/types.def";

export default async function DislikeSong(req: MYREQEUST, res: Response) {
  let my_id: number = req.user!;
  let song_id: number = Number(req.params.song_id);

  await prisma_client.like.delete({
    where: { song_id_fan_id: { fan_id: my_id, song_id } },
  });

  await prisma_client.song.update({
    where: { id: song_id },
    data: { likes: { decrement: 1 } },
  });

  res.status(200).send("DisLike Done");
}
