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
}

export interface Artist {
  id: number;
  photoUrl: string;
  followers: number;
  username: string;
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
