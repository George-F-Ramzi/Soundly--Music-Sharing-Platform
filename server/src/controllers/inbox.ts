import { Request, Response } from "express";
import prisma_client from "../lib/database";

export default async function Inbox(req: Request, res: Response) {
  let my_id = Number(req.user);

  try {
    let data = await prisma_client.notification.findMany({
      where: { nottifer_id: my_id },
      include: {
        nottifer: {
          select: {
            id: true,
            followers: true,
            photo_url: true,
            username: true,
            songs_uploaded_number: true,
            following: true,
          },
        },
        song: true,
      },
    });

    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
