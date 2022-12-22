import { Form, Link, useActionData, redirect } from "react-router-dom";
import { LoginApi } from "../api/userAuth";

let loading = false;

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = {};
  data.email = formData.get("email");
  data.password = formData.get("password");
  try {
    const request = await LoginApi(data);
    localStorage.setItem("token", request.headers["x-auth-token"]);
    loading = false;
    return redirect("/home");
  } catch (error) {
    loading = false;
    return error.response.data;
  }
};

const Login = () => {
  const error = useActionData();

  return (
    <Form
      onSubmit={() => {
        loading = true;
      }}
      method="post"
      className="form"
      action="/login"
    >
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input--big"
      />
      {error && error.includes("email") && (
        <p className="error__text">{error}</p>
      )}

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="input input--big"
      />
      {error && error.includes("password") && (
        <p className="error__text">{error}</p>
      )}

      {!loading ? (
        <button type="submit" className="btn btn--big">
          Login
        </button>
      ) : (
        ""
      )}
      <p className="form-info">
        You don't have account? <Link to="/">Register</Link>
      </p>
    </Form>
  );
};

export default Login;
