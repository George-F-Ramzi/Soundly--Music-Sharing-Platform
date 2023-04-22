import { JoinForm } from "./types.def";
import { JoinPoint } from "../api/authentication";

interface Args {
  form: FormData;
  setError: (value: string) => void;
  setLoading: (value: boolean) => void;
}

async function HandleJoin({ form, setError, setLoading }: Args): Promise<void> {
  let username: FormDataEntryValue = form.get("username")!;
  let email: FormDataEntryValue = form.get("email")!;
  let password: FormDataEntryValue = form.get("password")!;

  if (username != null && email != null && password != null) {
    let data: JoinForm = { username, email, password };
    let message: string = await JoinPoint(data);
    if (message === "Done") window.location.reload();
    else {
      setLoading(false);
      setError(message);
    }
  }
}

export default HandleJoin;
