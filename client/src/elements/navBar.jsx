import React, { useEffect, useState } from "react";
import "../css/navBar.css";
import { RiSearch2Line, RiInboxArchiveLine, RiMenu5Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { NavBarData } from "../api/authApi";
import lodash from "lodash";
import SideBar from "./sideBar";
import { toast } from "react-toastify";

export let Photo;
export let Id;

const NavBar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Profile();
  }, []);

  const Profile = async () => {
    try {
      const id = await NavBarData();
      setData(id);
      Photo = id.photoUrl;
      Id = id.id;
    } catch (error) {
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  return (
    <React.Fragment>
      {open ? <SideBar close={setOpen} /> : ""}
      <div className="nav-bar">
        <Link to={"/home"}>
          <h5 className="logo">Soundly</h5>
        </Link>
        <div className="search-input">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search/users/${value}`);
            }}
          >
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="field"
              value={value}
              onChange={(e) => {
                e.preventDefault();
                setValue(e.target.value);
              }}
              required
            />
          </form>
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
          <RiMenu5Fill onClick={() => setOpen(true)} size={"24px"} />
        </button>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
