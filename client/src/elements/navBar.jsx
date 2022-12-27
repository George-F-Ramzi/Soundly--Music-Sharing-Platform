import { useEffect, useState } from "react";
import "../css/navBar.css";
import { RiSearch2Line, RiInboxArchiveLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { NavBarData } from "../api/authApi";
import lodash from "lodash";

const NavBar = () => {
  const [data, setData] = useState();
  useEffect(() => {
    Profile();
  }, []);

  const Profile = async () => {
    const id = await NavBarData();
    setData(id);
  };
  return (
    <div className="nav-bar">
      <Link to={"/home"}>
        <h5 className="logo">Soundly</h5>
      </Link>
      <div className="search-input">
        <input
          name="search"
          type="text"
          placeholder="Search"
          className="field"
        />
        <RiSearch2Line size={"24px"} className="field-icon" />
      </div>
      <div className="nav__btns">
        <Link to={"/upload"}>
          <button className="nav__btn ">Upload</button>
        </Link>
        <Link to={"/inbox"}>
          <button className="nav__btn-icon ">
            <RiInboxArchiveLine size={"24px"} />
          </button>
        </Link>
        {lodash.isEmpty(data) ? (
          ""
        ) : (
          <Link className="nav__img" to={`/profile/${data.id}`}>
            {lodash.isEmpty(data) ? (
              ""
            ) : (
              <img className="the-img" src={data.photoUrl} />
            )}
          </Link>
        )}
      </div>
      <button className="show nav__btn-icon ">
        <RiMenu5Fill size={"24px"} />
      </button>
    </div>
  );
};

export default NavBar;
