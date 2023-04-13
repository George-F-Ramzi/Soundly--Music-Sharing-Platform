import { Request, Response } from "express";
import prisma_client from "../lib/database";
import Joi, { Schema } from "joi";

export default async function Comment(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: string = req.params.user_id;
  let { details }: { details: string } = req.body;

  const schema: Schema = Joi.object({
    details: Joi.string().required().label("Comment Details"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  try {
    let nottifer = await prisma_client.song.findUnique({
      where: { id: Number(song_id) },
      select: { artist_id: true },
    });

    if (nottifer === null)
      return res.status(400).json("something wrong happen");

    await prisma_client.comment.create({
      data: {
        details,
        artist_id: nottifer.artist_id,
        song_id: Number(song_id),
      },
    });

    await prisma_client.notification.create({
      data: {
        message_detail: "Commented on your song",
        nottifer_id: nottifer.artist_id,
        trigger_id: my_id,
        song_id: Number(song_id),
      },
    });
    res.status(200).send("Commenting Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
