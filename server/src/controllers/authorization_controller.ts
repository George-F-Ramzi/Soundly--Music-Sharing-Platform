import prisma_client from "../lib/database";
import Joi, { Schema } from "joi";
import { Response, Request } from "express";
import { UploadedFiles } from "../lib/types.def";
import cloudinary from "../lib/cloudinary";
import { DeleteUploaded, Uploader } from "../lib/global";

export async function Upload(req: Request, res: Response) {
  const { name }: { name: string } = req.body;
  let files = req.files as any as UploadedFiles;
  let cover_url: string = files.cover_file[0].path;
  let song_url: string = files.song_file[0].path;
  let id: number = req.user!;
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
