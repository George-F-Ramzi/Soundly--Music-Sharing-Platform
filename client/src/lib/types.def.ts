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
