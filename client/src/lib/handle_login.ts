import { NavigateFunction } from "react-router-dom";
import { LoginForm } from "./types.def";
import { LoginPoint } from "../api/authentication";

interface Args {
  form: FormData;
  navigate: NavigateFunction;
  setError: (value: string) => void;
}

async function HandleLogin({ form, setError, navigate }: Args): Promise<void> {
  let email: FormDataEntryValue = form.get("email")!;
  let password: FormDataEntryValue = form.get("password")!;

  if (email != null && password != null) {
    let data: LoginForm = { email, password };
    let message: string = await LoginPoint(data);
    if (message === "Done") navigate("/home", { replace: true });
    else setError(message);
  }
}

export default HandleLogin;
