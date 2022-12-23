import React from "react";
import "../css/navBar.css";
import { RiSearch2Line, RiInboxArchiveLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h5 className="logo">Soundly</h5>
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
        <button className="nav__btn ">Upload</button>
        <button className="nav__btn-icon ">
          <RiInboxArchiveLine size={"24px"} />
        </button>
        <Link className="nav__img" to={"/profile"}>
          <img className="the-img" src="https://picsum.photos/200/300" />
        </Link>
      </div>
      <button className="show nav__btn-icon ">
        <RiMenu5Fill size={"24px"} />
      </button>
    </div>
  );
};

export default NavBar;
