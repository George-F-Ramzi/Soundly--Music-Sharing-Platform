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
