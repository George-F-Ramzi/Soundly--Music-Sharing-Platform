import {
  HomePageType,
  IArtist,
  IFollowed,
  ISongCard,
  InboxCardType,
} from "../lib/types.def";

let server = "http://localhost:3999";

let token = localStorage.getItem("token")!;

export const HomePageData = async (): Promise<HomePageType> => {
  let response: Response = await fetch(`${server}/home`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<HomePageType> = await response.json();
  return data;
};

export const Me = async (): Promise<IArtist> => {
  let response: Response = await fetch(`${server}/me`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<IArtist> = await response.json();
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

export const IsFollowedPoint = async (userId: number): Promise<IFollowed> => {
  let response = await fetch(`${server}/is_followed/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let result: IFollowed = await response.json();
  return result;
};

export const InboxData = async (): Promise<InboxCardType[]> => {
  let response: Response = await fetch(`${server}/inbox`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<InboxCardType[]> = await response.json();
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

export const UploadedSongs = async (id: string) => {
  let response: Response = await fetch(`${server}/uploaded/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<ISongCard[]> = await response.json();
  return data;
};

export const Like = async (songId: string) => {
  await fetch(`${server}/like/${songId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};

export const Dislike = async (songId: string) => {
  await fetch(`${server}/dislike/${songId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
};
