import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Join from "../Components/join";
import Login from "../Components/login";

const LandingPage = () => {
  const navigate = useNavigate();
  const [showJoin, setShowJoin] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("./home", { replace: true });
    }
  }, []);

  return (
    <div className="h-full">
      <h5 className=" absolute top-8 left-8 tablet:top-4 tablet:left-4  text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#06ff3d] to-[#2bffcc] font-bold">
        Soundly
      </h5>
      {showJoin ? <Join hide={setShowJoin} /> : <Login hide={setShowJoin} />}
    </div>
  );
};

export default LandingPage;
