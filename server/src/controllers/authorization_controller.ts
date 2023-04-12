import prisma_client from "../lib/database";
import Joi, { Schema } from "joi";
import { Response, Request } from "express";
import { SongForm } from "../lib/types.def";

export async function Upload(req: Request, res: Response) {
  const schema: Schema = Joi.object({
    name: Joi.string().required().label("Song Name"),
    cover_file: Joi.binary().required(),
    song_file: Joi.binary().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.message);

  const { song_file, name, cover_file }: SongForm = req.body;
  let id = req.user;

  try {
    res.json({ name, song_file, cover_file, id });
  } catch (error) {
    res.json(error);
  }
}
