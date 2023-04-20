import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Inbox(req: Request, res: Response) {
  let my_id = Number(req.user);

  let data = await prisma_client.notification.findMany({
    where: { nottifer_id: my_id },
  });

  res.status(200).json(data);
}
