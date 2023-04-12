export interface JoinForm {
  username: string;
  email: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface SongForm {
  name: string;
  cover_file: Buffer;
  song_file: Buffer;
}
