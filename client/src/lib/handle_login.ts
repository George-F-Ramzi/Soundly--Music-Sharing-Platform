import { LoginPoint } from "../api/authentication";
import { LoginForm } from "./types.def";

interface Args {
  form: FormData;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
}

async function HandleLogin({
  form,
  setError,
  setLoading,
}: Args): Promise<void> {
  let email: FormDataEntryValue = form.get("email")!;
  let password: FormDataEntryValue = form.get("password")!;

  if (email != null && password != null) {
    let data: LoginForm = { email, password };
    let message: string = await LoginPoint(data);
    if (message === "Done") window.location.reload();
    else {
      setLoading(false);
      setError(message);
    }
  }
}

export default HandleLogin;
