import { useEffect, useState } from "react";
import { RiSearch2Line, RiInboxArchiveLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { NavBarData } from "../api/authorization";
import { Artist } from "../lib/types.def";

function NavBar() {
  const [data, setData] = useState<Artist>();
  const navigate = useNavigate();
  useEffect(() => {
    const GetInfo = async () => {
      let response: Artist = await NavBarData();
      setData(response);
      localStorage.setItem("myId", String(response.id));
      localStorage.setItem("myProfile", JSON.stringify(response));
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
      <div className="w-[300px] h-full tablet:hidden  relative rounded-full  border-gray-500 border-[0.4px] ">
        <input
          placeholder="Search"
          className="w-full h-full rounded-full border-none outline-none bg-gray-800 text-gray-300  p-4"
        />
        <RiSearch2Line
          size={"24px"}
          className="absolute right-4 top-[10px] text-gray-300 "
        />
      </div>
      <div className="flex tablet:hidden">
        <Link
          to={"/upload"}
          className="h-12 rounded-full font-bold px-7 flex items-center justify-center bg-gradient1"
        >
          Upload
        </Link>
        <Link
          className="h-12 w-12 rounded-full ml-4  flex items-center justify-center bg-gradient1"
          to={"/inbox"}
        >
          <RiInboxArchiveLine size={"26px"} />
        </Link>
        <div
          onClick={() =>
            navigate(`/profile/${data?.id}`, { state: { profile: data } })
          }
        >
          <img
            src={data?.photoUrl}
            className="h-12 w-12 cursor-pointer rounded-full ml-4 "
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
