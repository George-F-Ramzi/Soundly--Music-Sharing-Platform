import { useEffect, useState } from "react";
import { RiSearch2Line, RiInboxArchiveLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { NavBarData } from "../api/authorization";
import { NavBarType } from "../lib/types.def";

function NavBar() {
  const [data, setData] = useState<NavBarType>();
  useEffect(() => {
    const GetInfo = async () => {
      let response: NavBarType = await NavBarData();
      setData(response);
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
        <Link to={`/profile/${data?.id}`}>
          <img src={data?.photoUrl} className="h-12 w-12 rounded-full ml-4 " />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
