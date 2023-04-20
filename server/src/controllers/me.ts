import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Me(req: Request, res: Response) {
  let my_id: number = req.user!;

  let result = await prisma_client.artist.findUnique({
    where: { id: my_id },
    select: { id: true, photo_url: true },
  });

  res.status(200).json(result);
}
