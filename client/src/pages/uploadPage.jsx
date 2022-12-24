import React from "react";
import { Form } from "react-router-dom";
import NavBar from "../elements/navBar";
import "../css/upload.css";

const UploadPage = () => {
  return (
    <div className="uploadPage">
      <NavBar />
      <div className="upload">
        <Form className="upload-form">
          <input
            type="text"
            placeholder="Enter Song Name"
            className="input input--big"
          />
          <div className="grid-2">
            <div className="upload-cover">
              <input type="file" accept="audio/*" className="input-file" />
              <p className="cover-text">Select Song File</p>
            </div>
            <div className="upload-cover">
              <input type="file" accept="image/*" className="input-file" />
              <p className="cover-text">Select Image File</p>
            </div>
          </div>
          <button className="btn btn--big upload-btn">Upload</button>
        </Form>
      </div>
    </div>
  );
};

export default UploadPage;
