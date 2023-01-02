import React, { useEffect } from "react";
import "../css/landingPage.css";
import { Outlet, useNavigate } from "react-router-dom";
import { AllowJoin } from "../api/userAuth";
import { toast } from "react-toastify";

const LandingPage = () => {
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfSWQiOjQ2LCJpYXQiOjE2NzI2NTU5NjN9.L3--b-OvkWmEPbkUS3TlinjFay_y0s6aDIcAqxEu5nA";

  useEffect(() => {
    autoLogin();
  }, []);

  const autoLogin = async () => {
    if (!localStorage.getItem("token")) return;
    try {
      await AllowJoin();
      return navigate("/home");
    } catch (error) {
      return toast("Login Session Expired", { type: "error" });
    }
  };

  return (
    <div className="landing-page">
      <h1 className="landing__title">
        A New Sharing Experience With Soundly Share Explore And Much More
      </h1>
      <Outlet />
      <button
        onClick={() => {
          localStorage.setItem("token", token);
          navigate("/home");
        }}
        className="btn btn--small body1 demo"
      >
        Login As Demo
      </button>
    </div>
  );
};

export default LandingPage;
