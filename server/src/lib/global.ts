import cloudinary from "./cloudinary";
import prisma_client from "./database";

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

interface DeleteUploadedArgs {
  song_id: string;
  cover_id: string;
}

export async function DeleteUploaded({
  song_id,
  cover_id,
}: DeleteUploadedArgs) {
  await cloudinary.uploader.destroy(song_id, { resource_type: "video" });
  await cloudinary.uploader.destroy(cover_id);
}
