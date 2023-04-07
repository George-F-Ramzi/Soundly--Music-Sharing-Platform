import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notfound">
      <h1 className="not-title">404</h1>
      <h5 className="not-subtitle">
        sorry the content you were trying to reach was not found
      </h5>
      <button
        onClick={() => navigate("../", { replace: true })}
        className="btn btn--small body1"
      >
        Return
      </button>
    </div>
  );
};

export default NotFound;
