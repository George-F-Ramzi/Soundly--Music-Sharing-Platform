import { Response } from "express";
import prisma_client from "../lib/database";
import { MYREQEUST } from "../lib/types.def";

export default async function Me(req: MYREQEUST, res: Response) {
  let my_id: number = req.user!;

  let result = await prisma_client.artist.findUnique({
    where: { id: my_id },
    select: { id: true, photo_url: true, username: true },
  });

  res.status(200).json(result);
}
