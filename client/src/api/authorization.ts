import {
  Artist,
  HomePageType,
  InboxCardType,
  ProfilePageType,
} from "../lib/types.def";

let server = "https://soundly-nodejs.vercel.app";

let token = localStorage.getItem("token")!;

let serverLocal = "http://localhost:3999";

export const HomePageData = async (): Promise<HomePageType> => {
  let response: Response = await fetch(`${serverLocal}/homepage`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<HomePageType> = await response.json();
  return data;
};

export const NavBarData = async (): Promise<Artist> => {
  let response: Response = await fetch(`${serverLocal}/navbar`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<Artist> = await response.json();
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

export const GetProfileData = async (id: string) => {
  let response: Response = await fetch(`${serverLocal}/getProfile/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-auth-token": token },
  });
  let data: Promise<ProfilePageType> = await response.json();
  return data;
};

// export const Like = async (songId) => {
//   const token = localStorage.getItem("token");
//   const like = `https://soundly-nodejs.vercel.app/like/${songId}`;
//   return await axios.post(like, {}, { headers: { "x-auth-token": token } });
// };

// export const DisLike = async (songId) => {
//   const token = localStorage.getItem("token");
//   const DisLike = `https://soundly-nodejs.vercel.app/dislike/${songId}`;
//   return await axios.delete(DisLike, { headers: { "x-auth-token": token } });
// };

// export const GetProfile = async (userId) => {
//   const token = localStorage.getItem("token");
//   const Profile = `https://soundly-nodejs.vercel.app/getProfile/${userId}`;
//   const { data } = await axios.get(Profile, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const GetUploaded = async (userId) => {
//   const token = localStorage.getItem("token");
//   const uploaded = `https://soundly-nodejs.vercel.app/uploaded/${userId}`;
//   const { data } = await axios.get(uploaded, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const GetLiked = async (userId) => {
//   const token = localStorage.getItem("token");
//   const Liked = `https://soundly-nodejs.vercel.app/likedSongs/${userId}`;
//   const { data } = await axios.get(Liked, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const UpdateImage = async (image) => {
//   const token = localStorage.getItem("token");
//   const form = new FormData();
//   form.append("photo", image);

//   const edit = `https://soundly-nodejs.vercel.app/editProfile`;

//   await axios({
//     method: "put",
//     url: edit,
//     data: form,
//     headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
//   });
// };

// export const GetSongData = async (songId) => {
//   const token = localStorage.getItem("token");
//   const song = `https://soundly-nodejs.vercel.app/songData/${songId}`;
//   const { data } = await axios.get(song, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const DoComment = async (songId, userId, details) => {
//   const token = localStorage.getItem("token");
//   const comment = `https://soundly-nodejs.vercel.app/comment/${songId}/${userId}`;
//   await axios.post(
//     comment,
//     { details },
//     {
//       headers: { "x-auth-token": token },
//     }
//   );
// };

// export const GetComments = async (songId) => {
//   const token = localStorage.getItem("token");
//   const comments = `https://soundly-nodejs.vercel.app/getComments/${songId}`;
//   const { data } = await axios.get(comments, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const SearchUsers = async (value) => {
//   const token = localStorage.getItem("token");
//   const users = `https://soundly-nodejs.vercel.app/search/users/${value}`;
//   const { data } = await axios.get(users, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };

// export const SearchSongs = async (value) => {
//   const token = localStorage.getItem("token");
//   const songs = `https://soundly-nodejs.vercel.app/search/songs/${value}`;
//   const { data } = await axios.get(songs, {
//     headers: { "x-auth-token": token },
//   });
//   return data;
// };
