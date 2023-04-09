import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FastLogin } from "../lib/global.def";
import FormError from "../microElements/formError";
import Input from "../microElements/input";
import HandleJoin from "../lib/HandleJoin";

const Join = ({ hide }: { hide: (check: boolean) => void }) => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  return (
    <div className="w-full h-full p-6 tablet:p-4 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let form: FormData = new FormData(e.currentTarget);
          HandleJoin({ form, setError, navigate });
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
          }}
          className="w-full h-12 rounded-[4px] border border-gray-500 text-gray-300 font-bold mb-12"
        >
          Login As A Demo
        </button>

        <Input name="username" placeholder="Enter Username" type="text" />
        {error.includes("username") ? <FormError text={error} /> : ""}

        <Input
          name="email"
          placeholder="Enter Email"
          type="email"
          margin="mt-4"
        />
        {error.includes("email") ? <FormError text={error} /> : ""}

        <Input
          name="password"
          placeholder="Enter Password"
          type="password"
          margin="mt-4"
        />
        {error.includes("password") ? <FormError text={error} /> : ""}

        <button
          type="submit"
          className="bg-gradient1 mt-[48px] w-full h-[48px] font-bold drop-shadow-md rounded-[4px]"
        >
          Join
        </button>
        <p className="mt-[48px] text-center text-white">
          You already have account?{" "}
          <span
            onClick={() => hide(false)}
            className="text-emerald-400 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Join;
