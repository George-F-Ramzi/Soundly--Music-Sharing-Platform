import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/sideBar.css";
import { Id } from "./navBar";

const SideBar = ({ close }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState();
  return (
    <div className="sidebar">
      <button onClick={() => close(false)} className="close-btn">
        Close
      </button>
      <button
        onClick={() => {
          navigate(`/profile/${Id}`);
          close(false);
        }}
        className="sidebar-btn"
      >
        Profile
      </button>
      <button
        onClick={() => {
          navigate(`/inbox`);
          close(false);
        }}
        className="sidebar-btn"
      >
        Inbox
      </button>
      <button
        onClick={() => {
          navigate(`/upload`);
          close(false);
        }}
        className="sidebar-btn"
      >
        Upload
      </button>
      <form
        className="sidebar__form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/users/${value}`);
        }}
      >
        <input
          name="search"
          type="text"
          placeholder="Search"
          className="sidebar-field"
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
};

export default SideBar;
