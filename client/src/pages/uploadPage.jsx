import React from "react";
import { Form } from "react-router-dom";
import NavBar from "../elements/navBar";
import "../css/upload.css";

const UploadPage = () => {
  return (
    <div className="uploadPage">
      <NavBar />
      <div className="upload">
        <Form>
          <input
            type="text"
            placeholder="Enter Song Name"
            className="input input--big"
          />
          <div className="upload-cover">
            <input type="file" accept="audio/*" className="input-file" />
          </div>
          <div className="upload-cover">
            <input type="file" accept="image/*" className="input-file" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UploadPage;
