import React from "react";
import "../css/navBar.css";
import { RiSearch2Line, RiInboxLine } from "react-icons/ri";

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
          <RiInboxLine size={"32px"} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
