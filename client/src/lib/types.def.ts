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
  followers: number;
  photo_url: string;
  username: string;
  songs_uploaded_number: number;
  following: number;
}

export interface SongCard {
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

export interface HomePageType {
  discover: SongCard[];
  artists: Artist[];
}

export interface ContextPlayerType {
  setSong?: (song: SongCard) => void;
}

export interface InboxCardType {
  triggerId: number;
  messageId: number;
  photoUrl: string;
  songId: number;
  username: string;
}
