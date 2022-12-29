import axios from "axios";

export const Discover = async () => {
  const token = localStorage.getItem("token");
  const Discover = "https://soundly.onrender.com/discover";
  const { data } = await axios.get(Discover, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const Artists = async () => {
  const token = localStorage.getItem("token");
  const Artists = "https://soundly.onrender.com/artists";
  const { data } = await axios.get(Artists, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const NavBarData = async () => {
  const token = localStorage.getItem("token");
  const navbar = "https://soundly.onrender.com/navbar";
  const { data } = await axios.get(navbar, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetCurrentSong = async (songId, userId) => {
  const token = localStorage.getItem("token");
  const song = `https://soundly.onrender.com/song/${songId}/${userId}`;
  const { data } = await axios.get(song, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const DidIFollow = async (userId) => {
  const token = localStorage.getItem("token");
  const didIFollow = `https://soundly.onrender.com/didIFollow/${userId}`;
  return await axios.get(didIFollow, { headers: { "x-auth-token": token } });
};

export const Follow = async (userId) => {
  const token = localStorage.getItem("token");
  const follow = `https://soundly.onrender.com/follow/${userId}`;
  return await axios.post(follow, {}, { headers: { "x-auth-token": token } });
};

export const UnFollow = async (userId) => {
  const token = localStorage.getItem("token");
  const unFollow = `https://soundly.onrender.com/unfollow/${userId}`;
  return await axios.post(unFollow, {}, { headers: { "x-auth-token": token } });
};

export const DidILike = async (songId) => {
  const token = localStorage.getItem("token");
  const didIFollow = `https://soundly.onrender.com/didILike/${songId}`;
  return await axios.get(didIFollow, { headers: { "x-auth-token": token } });
};

export const Like = async (songId) => {
  const token = localStorage.getItem("token");
  const like = `https://soundly.onrender.com/like/${songId}`;
  return await axios.post(like, {}, { headers: { "x-auth-token": token } });
};

export const DisLike = async (songId) => {
  const token = localStorage.getItem("token");
  const DisLike = `https://soundly.onrender.com/dislike/${songId}`;
  return await axios.delete(DisLike, { headers: { "x-auth-token": token } });
};

export const GetProfile = async (userId) => {
  const token = localStorage.getItem("token");
  const Profile = `https://soundly.onrender.com/getProfile/${userId}`;
  const { data } = await axios.get(Profile, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetUploaded = async (userId) => {
  const token = localStorage.getItem("token");
  const uploaded = `https://soundly.onrender.com/uploaded/${userId}`;
  const { data } = await axios.get(uploaded, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const GetLiked = async (userId) => {
  const token = localStorage.getItem("token");
  const Liked = `https://soundly.onrender.com/likedSongs/${userId}`;
  const { data } = await axios.get(Liked, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const UpdateImage = async (image) => {
  const token = localStorage.getItem("token");
  const form = new FormData();
  form.append("photo", image);

  const edit = `https://soundly.onrender.com/editProfile`;

  await axios({
    method: "put",
    url: edit,
    data: form,
    headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
  });
};

export const GetSongData = async (songId) => {
  const token = localStorage.getItem("token");
  const song = `https://soundly.onrender.com/songData/${songId}`;
  const { data } = await axios.get(song, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const DoComment = async (songId, userId, details) => {
  const token = localStorage.getItem("token");
  const comment = `https://soundly.onrender.com/comment/${songId}/${userId}`;
  await axios.post(
    comment,
    { details },
    {
      headers: { "x-auth-token": token },
    }
  );
};

export const GetComments = async (songId) => {
  const token = localStorage.getItem("token");
  const comments = `https://soundly.onrender.com/getComments/${songId}`;
  const { data } = await axios.get(comments, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const InboxData = async () => {
  const token = localStorage.getItem("token");
  const Inbox = `https://soundly.onrender.com/inbox`;
  const { data } = await axios.get(Inbox, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const Upload = async (form) => {
  const token = localStorage.getItem("token");
  const Upload = `https://soundly.onrender.com/upload`;
  await axios({
    method: "post",
    url: Upload,
    data: form,
    headers: { "x-auth-token": token, "Content-Type": "multipart/form-data" },
  });
};

export const SearchUsers = async (value) => {
  const token = localStorage.getItem("token");
  const users = `https://soundly.onrender.com/search/users/${value}`;
  const { data } = await axios.get(users, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const SearchSongs = async (value) => {
  const token = localStorage.getItem("token");
  const songs = `https://soundly.onrender.com/search/songs/${value}`;
  const { data } = await axios.get(songs, {
    headers: { "x-auth-token": token },
  });
  return data;
};
