import { NavigateFunction } from "react-router-dom";
import { LoginPoint } from "../api/authentication";
import { LoginForm } from "./types.def";

interface Args {
  form: FormData;
  navigate: NavigateFunction;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
}

async function HandleLogin({
  form,
  setError,
  navigate,
  setLoading,
}: Args): Promise<void> {
  let email: FormDataEntryValue = form.get("email")!;
  let password: FormDataEntryValue = form.get("password")!;

  if (email != null && password != null) {
    let data: LoginForm = { email, password };
    let message: string = await LoginPoint(data);
    if (message === "Done") navigate("/home", { replace: true });
    else {
      setLoading(false);
      setError(message);
    }
  }
}

export default HandleLogin;
