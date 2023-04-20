import { HomePageType, ISongCard } from "../lib/types.def";

let server = "http://localhost:3999";
let token = localStorage.getItem("token")!;

export const Me = async (): Promise<{ id: number; photo_url: string }> => {
  let response: Response = await fetch(`${server}/me`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<{ id: number; photo_url: string }> = await response.json();
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
