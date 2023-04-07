import React from "react";
import { useNavigate } from "react-router-dom";
import { Id } from "./navBar";

const SideBar = ({ close }) => {
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          navigate(`/search/users/""`);
          close(false);
        }}
        className="sidebar-btn"
      >
        Search
      </button>
    </div>
  );
};

export default SideBar;
