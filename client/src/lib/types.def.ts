export interface JoinForm {
  username: FormDataEntryValue;
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface LoginForm {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

export interface ISongCard {
  id: number;
  song_name: string;
  song_cover_url: string;
  song_file_url: string;
  likes: number;
  artist_id: number;
  artist: {
    username: string;
  };
}

export interface IArtistCard {
  id: number;
  followers: number;
  photo_url: string;
  username: string;
}

export interface HomePageType {
  artists: IArtistCard[];
  discover: ISongCard[];
}

export interface IContextPlayer {
  setSong?: (song: ISongCard) => void;
}

export interface IArtistPage {
  info: {
    id: number;
    followers: number;
    photo_url: string;
    username: string;
    following: number;
    songs_uploaded_number: number;
  };
  followed: boolean;
  songs: ISongCard[];
}

export interface IComment {
  id: number;
  artist_id: number;
  song_id: number;
  details: string;
  artist: {
    username: string;
    photo_url: string;
  };
}

export interface ISongPage {
  info: ISongCard;
  liked: boolean;
  comments: IComment[];
}

export interface IME {
  id: number;
  photo_url: string;
  username: string;
}

export interface SearchPageType {
  artists: IArtistCard[];
  songs: ISongCard[];
}

export interface InboxCardType {
  id: number;
  trigger_id: number;
  nottifer_id: number;
  song_id: number | null;
  message_detail: string;
  trigger: {
    photo_url: string;
    username: string;
  };
}
