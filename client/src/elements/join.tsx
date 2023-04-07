import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JoinPoint } from "../api/authentication";
import { FastLogin } from "../lib/global.def";
import { JoinForm } from "../lib/types.def";
import FormError from "./formError";

const Join = ({ hide }: { hide: (check: boolean) => void }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const handleSubmit = async (form: FormData) => {
    let username: FormDataEntryValue = form.get("username")!;
    let email: FormDataEntryValue = form.get("email")!;
    let password: FormDataEntryValue = form.get("password")!;

    if (username != null && email != null && password != null) {
      let data: JoinForm = { username, email, password };
      let message: string = await JoinPoint(data);
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
          Hi There!
          <br />
          Create A New Account
        </h5>
        <button
          onClick={(e) => {
            e.preventDefault();
            FastLogin();
            navigate("/home", { replace: true });
          }}
          className="w-full h-12 rounded-[4px] border border-gray3 text-gray3 font-bold mb-12"
        >
          Login As A Demo
        </button>
        <input
          required
          minLength={8}
          name="username"
          type={"text"}
          placeholder="Enter Username"
          className="w-full valid:border-green-500  h-12 rounded-[4px] border border-gray3 text-gray3 mb-4 bg-transparent p-4"
        />
        {error.includes("username") ? <FormError text={error} /> : ""}
        <input
          name="email"
          type={"email"}
          required
          placeholder="Enter Email"
          className="w-full  valid:border-green-500  h-12 rounded-[4px] border border-gray3 text-gray3 mb-4 bg-transparent p-4"
        />
        {error.includes("email") ? <FormError text={error} /> : ""}
        <input
          name="password"
          minLength={8}
          type={"password"}
          required
          placeholder="Enter Passsword"
          className="w-full  valid:border-green-500 h-12 rounded-[4px] border border-gray3 text-gray3 mb-12 bg-transparent p-4"
        />
        {error.includes("password") ? <FormError text={error} /> : ""}
        <button
          type="submit"
          className="bg-gradient1 w-full h-[48px] font-bold drop-shadow-md rounded-[4px]"
        >
          Join
        </button>
        <p className="mt-[48px] text-center text-white">
          You already have account?{" "}
          <span
            onClick={() => hide(false)}
            className="text-secondary5 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Join;
