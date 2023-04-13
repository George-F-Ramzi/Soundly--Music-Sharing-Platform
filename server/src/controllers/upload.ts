import { Request, Response } from "express";
import { DeleteUploaded, Uploader } from "../lib/global";
import { UploadedFiles } from "../lib/types.def";
import Joi, { Schema } from "joi";

export default async function Upload(req: Request, res: Response) {
  const { name }: { name: string } = req.body;
  let id: number = req.user!;

  let files = req.files as any as UploadedFiles;
  let cover_url: string = files.cover_file[0].path;
  let song_url: string = files.song_file[0].path;

  let cover_id: string = files.cover_file[0].filename;
  let song_id: string = files.song_file[0].filename;

  const schema: Schema = Joi.object({
    name: Joi.string().required().label("Song Name"),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    DeleteUploaded({ song_id, cover_id });
    return res.status(400).json(error.message);
  }

  try {
    await Uploader({ id, song_url, name, cover_url });
    res.status(200).send("Uploading Done");
  } catch (error) {
    DeleteUploaded({ song_id, cover_id });
    return res.status(400).json("Something Wrong Happen");
  }
}
