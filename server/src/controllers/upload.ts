import { Response } from "express";
import { MYREQEUST, UploadedFiles } from "../lib/types.def";
import Joi, { Schema } from "joi";
import cloudinary from "../lib/cloudinary";
import prisma_client from "../lib/database";

export default async function Upload(req: MYREQEUST, res: Response) {
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

//

interface DeleteUploadedArgs {
  song_id: string;
  cover_id: string;
}

async function DeleteUploaded({ song_id, cover_id }: DeleteUploadedArgs) {
  await cloudinary.uploader.destroy(song_id, { resource_type: "video" });
  await cloudinary.uploader.destroy(cover_id);
}

//

interface UploaderArgs {
  id: number;
  song_url: string;
  cover_url: string;
  name: string;
}

export async function Uploader({
  id,
  song_url,
  name,
  cover_url,
}: UploaderArgs) {
  await prisma_client.song.create({
    data: {
      song_name: name,
      song_cover_url: cover_url,
      song_file_url: song_url,
      artist_id: id,
    },
  });
  await prisma_client.artist.update({
    data: { songs_uploaded_number: { increment: 1 } },
    where: { id },
  });

  let followers = await prisma_client.follower.findMany({
    where: { artist_id: id },
    select: { fan_id: true },
  });

  let data = followers.map((f) => {
    return {
      message_detail: "Uploaded A New Song",
      nottifer_id: f.fan_id,
      trigger_id: id,
    };
  });

  await prisma_client.notification.createMany({
    data,
  });
}
