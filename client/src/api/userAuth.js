import axios from "axios";

export const LoginApi = async (data) => {
  const loginApi = "https://soundly-nodejs.vercel.app/login";
  return await axios.post(loginApi, data);
};

export const RegisterApi = async (data) => {
  const registerApi = "https://soundly-nodejs.vercel.app/register";
  return await axios.post(registerApi, data);
};
