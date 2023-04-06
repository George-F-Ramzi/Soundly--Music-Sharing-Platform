import { useNavigate } from "react-router-dom";
import { FastLogin } from "../lib/global.dev";

interface Props {
  hide: (check: boolean) => void;
}

const Login = ({ hide }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full p-6 flex items-center justify-center">
      <form className="max-w-[384px] w-[384px]">
        <h5 className="font-bold text-xl text-white mb-8">
          Welcome Back!
          <br />
          Login to your account
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
          Login
        </button>
        <p className="mt-[48px] text-center text-white">
          You don't have account?{" "}
          <span onClick={() => hide(true)} className="text-secondary5">
            Join
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
