import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPoint } from "../api/authentication";
import { FastLogin } from "../lib/global.def";
import { LoginForm } from "../lib/types.def";
import FormError from "./formError";

const Login = ({ hide }: { hide: (check: boolean) => void }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (form: FormData) => {
    let email: FormDataEntryValue = form.get("email")!;
    let password: FormDataEntryValue = form.get("password")!;

    if (email != null && password != null) {
      let data: LoginForm = { email, password };
      let message: string = await LoginPoint(data);
      if (message === "Done") navigate("/home", { replace: true });
      else setError(message);
    }
  };

  return (
    <div className="w-full h-full p-6 tablet:p-4 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let form: FormData = new FormData(e.currentTarget);
          handleSubmit(form);
        }}
        className="max-w-[384px] w-[384px]"
      >
        <h5 className="font-bold text-xl text-white mb-8">
          Welcome Back!
          <br />
          Login To Your Account
        </h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            FastLogin();
            navigate("/home");
          }}
          className="w-full h-12 rounded-[4px] border border-gray-500 text-gray-300 font-bold mb-12"
        >
          Login As A Demo
        </button>
        <input
          name="email"
          type={"email"}
          required
          placeholder="Enter Email"
          className="w-full  valid:border-green-500  h-12 rounded-[4px] border border-gray-500 text-gray-300 mb-4 bg-transparent p-4"
        />
        {error.includes("email") ? <FormError text={error} /> : ""}
        <input
          name="password"
          minLength={8}
          type={"password"}
          required
          placeholder="Enter Passsword"
          className="w-full  valid:border-green-500 h-12 rounded-[4px] border border-gray-500 text-gray-300 mb-12 bg-transparent p-4"
        />
        {error.includes("password") ? <FormError text={error} /> : ""}
        <button
          type="submit"
          className="bg-gradient1 w-full h-[48px] font-bold drop-shadow-md rounded-[4px]"
        >
          Join
        </button>
        <p className="mt-[48px] text-center text-white">
          You don't have account?{" "}
          <span
            onClick={() => hide(true)}
            className="text-emerald-400 cursor-pointer"
          >
            Join
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
