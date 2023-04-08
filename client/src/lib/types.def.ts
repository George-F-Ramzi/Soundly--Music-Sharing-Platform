export interface JoinForm {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface LoginForm {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface Song {
  id: number;
  userId: number;
  songName: string;
  songUrl: string;
  coverUrl: string;
  username: string;
  likes: number;
  liked?: boolean;
}

export interface Artist {
  id: number;
  photoUrl: string;
  followers: number;
  username: string;
  following?: boolean;
}

export interface HomePageType {
  discover: Song[];
  artists: Artist[];
}

export interface NavBarType {
  id: number;
  photoUrl: string;
}

export interface ContextPlayerType {
  setSong?: (song: Song) => void;
}
