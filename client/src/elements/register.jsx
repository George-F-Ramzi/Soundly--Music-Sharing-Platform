import React from "react";
import { Form, Link, useActionData, redirect } from "react-router-dom";
import { RegisterApi } from "../api/userAuth";

let loading = false;

export const RegisterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = {};
  data.username = formData.get("username");
  data.email = formData.get("email");
  data.password = formData.get("password");
  try {
    const request = await RegisterApi(data);
    localStorage.setItem("token", request.headers["x-auth-token"]);
    loading = false;
    return redirect("/home");
  } catch (error) {
    loading = false;
    return error.response.data;
  }
};

const Register = () => {
  const error = useActionData();
  return (
    <Form
      onSubmit={() => {
        loading = true;
      }}
      method="post"
      className="form"
      action="/"
    >
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="input input--big"
        required
      />
      {error && error.includes("username") && (
        <p className="error__text">{error}</p>
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input--big "
        required
      />
      {error && error.includes("email") && (
        <p className="error__text">{error}</p>
      )}
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="input input--big"
        required
      />
      {error && error.includes("password") && (
        <p className="error__text">{error}</p>
      )}
      {!loading ? (
        <button type="submit" className="btn btn--big">
          Register
        </button>
      ) : (
        ""
      )}
      <p className="form-info">
        Already have account? <Link to="/login">Login</Link>
      </p>
    </Form>
  );
};

export default Register;
