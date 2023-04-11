export interface JoinForm {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface LoginForm {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface Artist {
  id: number;
  photoUrl: string;
  followers: number;
  username: string;
  following: number;
  songs: number;
  followed: number | null;
}

export interface Song extends Artist {
  id: number;
  userId: number;
  songName: string;
  songUrl: string;
  coverUrl: string;
  likes: number;
  liked: number | null;
}

export interface HomePageType {
  discover: Song[];
  artists: Artist[];
}

export interface ContextPlayerType {
  setSong?: (song: Song) => void;
}

export interface InboxCardType {
  triggerId: number;
  messageId: number;
  photoUrl: string;
  songId: number;
  username: string;
}

export interface ProfilePageType {
  likedSongs: Song[];
  uploadedSongs: Song[];
}

export interface Comment {
  details: string;
  userId: number;
  username: string;
  photoUrl: number;
}
