export interface JoinForm {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface LoginForm {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface IArtist {
  id: number;
  followers: number;
  photo_url: string;
  username: string;
  songs_uploaded_number: number;
  following: number;
}

export interface ISongCard {
  id: number;
  song_name: string;
  song_cover_url: string;
  song_file_url: string;
  likes: number;
  artist_id: number;
  artist: IArtist;
}

export interface HomePageType {
  discover: ISongCard[];
  artists: IArtist[];
}

export interface ContextPlayerType {
  setSong?: (song: ISongCard) => void;
}

export interface IFollowed {
  indicator: { artist_id: number; fan_id: number } | null;
}

export interface ILiked {
  indicator: { song_id: number; fan_id: number } | null;
}

export interface IComment {
  id: number;
  artist_id: number;
  song_id: number;
  details: string;
  artist: IArtist;
}

export interface SearchPageType {
  songs: ISongCard[];
  artists: IArtist[];
}
