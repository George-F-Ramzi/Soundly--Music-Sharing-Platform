import axios from "axios";

export const Discover = async () => {
  const token = localStorage.getItem("token");
  const Discover = "http://localhost:3999/discover";
  const { data } = await axios.get(Discover, {
    headers: { "x-auth-token": token },
  });
  return data;
};

export const Artists = async () => {
  const token = localStorage.getItem("token");
  const Artists = "http://localhost:3999/artists";
  const { data } = await axios.get(Artists, {
    headers: { "x-auth-token": token },
  });
  return data;
};
