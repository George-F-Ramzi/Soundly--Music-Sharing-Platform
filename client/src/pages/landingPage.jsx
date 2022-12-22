import React from "react";
import "../css/landingPage.css";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing__title">
        A New Sharing Experience With Soundly Share Explore And Much More
      </h1>
      <Outlet />
    </div>
  );
};

export default LandingPage;
