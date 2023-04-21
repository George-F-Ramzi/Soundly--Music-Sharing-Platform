import {
  HomePageType,
  IArtistPage,
  IME,
  ISongCard,
  ISongPage,
  InboxCardType,
  SearchPageType,
} from "../lib/types.def";

let server = "http://soundly-nodejs.vercel.app";
let token = localStorage.getItem("token")!;

export const Me = async (): Promise<IME> => {
  let response: Response = await fetch(`${server}/me`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<IME> = await response.json();
  return data;
};

export const HomePageData = async (): Promise<HomePageType> => {
  let response: Response = await fetch(`${server}/home`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<HomePageType> = await response.json();
  return data;
};

export const GetLikedSongs = async (): Promise<ISongCard[]> => {
  let response: Response = await fetch(`${server}/liked_songs`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<ISongCard[]> = await response.json();
  return data;
};

export const UploadPoint = async (form: FormData) => {
  await fetch(`${server}/upload`, {
    method: "POST",
    headers: {
      "x-auth-token": token,
    },
    body: form,
  });
};

export const GetArtistData = async (id: string): Promise<IArtistPage> => {
  let response: Response = await fetch(`${server}/artist/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<IArtistPage> = await response.json();
  return data;
};

export const Follow = async (userId: number): Promise<void> => {
  await fetch(`${server}/follow/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};

export const UnFollow = async (userId: number): Promise<void> => {
  await fetch(`${server}/unfollow/${userId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};

export const GetSongData = async (id: string): Promise<ISongPage> => {
  let response: Response = await fetch(`${server}/song/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<ISongPage> = await response.json();
  return data;
};

export const Like = async (songId: number) => {
  await fetch(`${server}/like/${songId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};

export const Dislike = async (songId: number) => {
  await fetch(`${server}/dislike/${songId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};

export const PostComment = async (data: FormData, id: number) => {
  let value = { details: data.get("details") };
  await fetch(`${server}/comment/${id}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
    body: JSON.stringify(value),
  });
};

export const SearchPoint = async (value: string): Promise<SearchPageType> => {
  let response: Response = await fetch(`${server}/search/${value}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<SearchPageType> = await response.json();
  return data;
};

export const InboxData = async (): Promise<InboxCardType[]> => {
  let response: Response = await fetch(`${server}/inbox`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<InboxCardType[]> = await response.json();
  return data;
};
