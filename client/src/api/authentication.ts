import { JoinForm, LoginForm } from "../lib/types.def";

let server = "https://soundly-nodejs.vercel.app/api";

export const JoinPoint = async (data: JoinForm): Promise<string> => {
  let response: Response = await fetch(`${server}/join`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let token = response.headers.get("x-auth-token");
  if (token != null) {
    localStorage.setItem("token", token);
    return "Done";
  } else return (await response.text()).toLocaleLowerCase();
};

export const LoginPoint = async (data: LoginForm): Promise<string> => {
  let response: Response = await fetch(`${server}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  let token = response.headers.get("x-auth-token");
  if (token != null) {
    localStorage.setItem("token", token);
    return "Done";
  } else return (await response.text()).toLocaleLowerCase();
};
