import { useEffect, useState } from "react";
import { RiSearch2Line, RiInboxArchiveLine, RiHeartLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { Me } from "../api/authorization";
import { IME } from "../lib/types.def";

function NavBar() {
  const [data, setData] = useState<IME>();
  const [Ivalue, setIvalue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const GetInfo = async () => {
      let response: IME = await Me();
      setData(response);
      localStorage.setItem("me", JSON.stringify(response));
    };
    GetInfo();
  }, []);

  return (
    <div className="h-12 flex items-center justify-between">
      <Link
        to={"/home"}
        className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#06ff3d] to-[#2bffcc] font-bold"
      >
        Soundly
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${Ivalue}`);
        }}
      >
        <div className="w-[280px] mx-4 h-full tablet:hidden  relative rounded-full  border-gray-500 border-[0.4px] ">
          <input
            placeholder="Search"
            className="w-full h-full  rounded-full border-none outline-none bg-gray-800 text-gray-300  p-4"
            value={Ivalue}
            onChange={(e) => setIvalue(e.currentTarget.value)}
          />

          <RiSearch2Line
            size={"24px"}
            className="absolute right-4 top-[14px] text-gray-300 "
          />
        </div>
      </form>
      <div className="flex min-w-fit tablet:hidden">
        <Link
          to={"/upload"}
          className="h-12  rounded-full font-bold px-7 flex items-center justify-center bg-gradient1"
        >
          Upload
        </Link>
        <Link
          className="h-12 min-w-12 w-12 rounded-full ml-4  flex items-center justify-center bg-gradient1"
          to={"/inbox"}
        >
          <RiInboxArchiveLine size={"26px"} />
        </Link>
        <Link
          className="h-12  min-w-12 w-12 rounded-full ml-4  flex items-center justify-center bg-gradient1"
          to={"/liked"}
        >
          <RiHeartLine size={"26px"} />
        </Link>
        <div>
          <Link to={`/artist/${data?.id}`}>
            <img
              src={data?.photo_url}
              className="h-12 w-12 cursor-pointer rounded-full ml-4 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
