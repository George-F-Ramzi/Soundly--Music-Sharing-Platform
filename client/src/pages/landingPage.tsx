import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Join from "../elements/join";
import Login from "../elements/login";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showJoin, setShowJoin] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("./home", { replace: true });
    }
  }, []);

  return (
    <div className="grid grid-cols-2 h-screen p-8  ">
      <h5 className=" absolute top-8 left-8  text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#06ff3d] to-[#2bffcc] font-bold">
        Soundly
      </h5>
      {showJoin ? <Join hide={setShowJoin} /> : <Login hide={setShowJoin} />}
      <div className="max-h-full bg-cover  bg-transparent leading-[150%]  pl-8 font-bold text-white text-8xl bg-landingBG flex items-center">
        Explore World Full Of Joi With Soundly
      </div>
    </div>
  );
};

export default LandingPage;
