import { Comment, Song } from "@prisma/client";
import { Request } from "express";
import { CloudinaryStorage } from "multer-storage-cloudinary";

export interface JoinForm {
  username: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface UploadedFiles {
  cover_file: Express.Multer.File[];
  song_file: Express.Multer.File[];
}

export interface IArtistPage {
  info: {
    id: number | null;
    followers: number | null;
    photo_url: string | null;
    username: string | null;
    following: number | null;
    songs_uploaded_number: number | null;
  };
  followed: boolean;
  songs: Song[];
}

export interface ISongPage {
  info: Song;
  liked: boolean;
  comments: Comment[];
}

export interface MYREQEUST extends Request {
  user?: number;
}
