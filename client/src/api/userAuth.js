import axios from "axios";

export const LoginApi = async (data) => {
  const loginApi = "https://soundly.onrender.com/login";
  return await axios.post(loginApi, data);
};

export const RegisterApi = async (data) => {
  const registerApi = "https://soundly.onrender.com/register";
  return await axios.post(registerApi, data);
};
