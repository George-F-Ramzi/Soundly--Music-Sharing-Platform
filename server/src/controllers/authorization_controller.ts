import prisma_client from "../lib/database";
import Joi, { Schema } from "joi";
import { Response, Request } from "express";
import { UploadedFiles } from "../lib/types.def";
import { DeleteUploaded, Uploader } from "../lib/global";

export async function Upload(req: Request, res: Response) {
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

export async function HomePageData(req: Request, res: Response) {
  let id: number = req.user!;

  try {
    let artists = await prisma_client.artist.findMany({
      include: { fan: true },
    });
    res.status(200).json(artists);
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}

export async function Follow(req: Request, res: Response) {
  let my_id: number = req.user!;
  let nottifier_id: string = req.params.user_id;

  try {
    await prisma_client.follower.create({
      data: { artist_id: Number(nottifier_id), fan_id: my_id },
    });

    await prisma_client.artist.update({
      where: { id: my_id },
      data: { following: { increment: 1 } },
    });

    await prisma_client.artist.update({
      where: { id: Number(nottifier_id) },
      data: { followers: { increment: 1 } },
    });

    await prisma_client.notification.create({
      data: {
        message_detail: "Started Following You",
        nottifer_id: Number(nottifier_id),
        trigger_id: my_id,
      },
    });
    res.status(200).send("Following Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}

export async function UnFollow(req: Request, res: Response) {
  let my_id: number = req.user!;
  let nottifier_id: string = req.params.user_id;

  try {
    let follower_row = await prisma_client.follower.findFirst({
      where: { fan_id: my_id, artist_id: Number(nottifier_id) },
      select: { id: true },
    });

    if (follower_row === null) {
      return res.status(400).json("You don't follow this user");
    }

    await prisma_client.follower.delete({ where: { id: follower_row.id } });
    await prisma_client.artist.update({
      where: { id: my_id },
      data: { following: { decrement: 1 } },
    });

    await prisma_client.artist.update({
      where: { id: Number(nottifier_id) },
      data: { followers: { decrement: 1 } },
    });

    res.status(200).send("Following Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}

export async function LikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: string = req.params.user_id;
  let nottifier_id: string = req.params.user_id;

  try {
    await prisma_client.like.create({
      data: { fan_id: my_id, song_id: Number(song_id) },
    });

    await prisma_client.song.update({
      where: { id: Number(song_id) },
      data: { likes: { increment: 1 } },
    });

    await prisma_client.notification.create({
      data: {
        message_detail: "Likes Your Song",
        nottifer_id: Number(nottifier_id),
        trigger_id: my_id,
        song_id: Number(song_id),
      },
    });
    res.status(200).send("Like Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}

export async function DislikeSong(req: Request, res: Response) {
  let my_id: number = req.user!;
  let song_id: string = req.params.user_id;

  try {
    let like_row = await prisma_client.like.findFirst({
      where: { fan_id: my_id, song_id: Number(song_id) },
      select: { id: true },
    });

    if (like_row === null) {
      return res.status(400).json("You don't Like this Song");
    }

    await prisma_client.like.delete({ where: { id: like_row.id } });

    await prisma_client.song.update({
      where: { id: Number(song_id) },
      data: { likes: { decrement: 1 } },
    });

    res.status(200).send("Like Done");
  } catch (error) {
    return res.status(400).json("Something Wrong Happen");
  }
}
