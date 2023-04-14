import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Me(req: Request, res: Response) {
  let my_id: number = req.user!;

  try {
    let result = await prisma_client.artist.findUnique({
      where: { id: my_id },
    });

    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
