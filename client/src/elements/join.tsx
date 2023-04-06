import { useNavigate } from "react-router-dom";
import { FastLogin } from "../lib/global.dev";

interface Props {
  hide: (check: boolean) => void;
}

const Join = ({ hide }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full p-6 flex items-center justify-center">
      <form className="max-w-[384px] w-[384px]">
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
          type={"text"}
          placeholder="Enter Username"
          className="w-full h-12 rounded-[4px] border border-gray3 text-gray3 mb-4 bg-transparent p-4"
        />
        <input
          type={"email"}
          required
          placeholder="Enter Email"
          className="w-full h-12 rounded-[4px] border border-gray3 text-gray3 mb-4 bg-transparent p-4"
        />
        <input
          type={"password"}
          required
          placeholder="Enter Passsword"
          className="w-full h-12 rounded-[4px] border border-gray3 text-gray3 mb-12 bg-transparent p-4"
        />
        <button
          type="submit"
          className="bg-gradient1 w-full h-[48px] font-bold drop-shadow-md rounded-[4px]"
        >
          Join
        </button>
        <p className="mt-[48px] text-center text-white">
          You already have account?{" "}
          <span onClick={() => hide(false)} className="text-secondary5">
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Join;
