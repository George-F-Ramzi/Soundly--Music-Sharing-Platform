import React, { useState, useEffect } from "react";
import "../css/upload.css";
import lodash from "lodash";
import joi from "joi";
import { Upload } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { Id } from "../elements/navBar";
import { toast } from "react-toastify";

const UploadPage = () => {
  const [data, setData] = useState({});
  const [allow, setAllow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!lodash.isEmpty(data)) {
      CheckValues();
    }
  }, [data]);

  const CheckValues = () => {
    const schema = joi.object({
      name: joi.string().required(),
      cover: joi.object().required(),
      song: joi.object().required(),
    });
    const { error } = schema.validate(data);
    if (error) return;
    setAllow(true);
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    const theData = { ...data };
    theData[e.target.name] = e.target.value;
    setData(theData);
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const theData = { ...data };
    theData[e.target.name] = e.target.files[0];
    setData(theData);
    toast(`You Selected A ${e.target.name}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", data.name);
    form.append("photo", data.cover);
    form.append("song", data.song);
    try {
      setAllow(false);
      setLoading(true);
      await Upload(form);
      setLoading(false);
      navigate(`/profile/${Id}`);
    } catch (error) {
      setLoading(false);
      setAllow(true);
      toast("Something Wrong Happen", { type: "error" });
    }
  };

  return (
    <div className="uploadPage">
      <div className="upload">
        <form onSubmit={handleSubmit} className="upload-form">
          <input
            type="text"
            placeholder="Enter Song Name"
            className="input input--big"
            name="name"
            onChange={handleTextChange}
            required
          />
          <div className="grid-2">
            <div className="upload-cover">
              <input
                onChange={handleFileChange}
                name="song"
                type="file"
                accept="audio/*"
                className="input-file"
                required
              />
              <p className="cover-text">Select Song File</p>
            </div>
            <div className="upload-cover">
              <input
                onChange={handleFileChange}
                name="cover"
                type="file"
                accept="image/*"
                className="input-file"
                required
              />
              <p className="cover-text">Select Image File</p>
            </div>
          </div>
          {loading ? (
            <button className="  btn--big upload-btn card__follow-loading">
              Loading...
            </button>
          ) : (
            ""
          )}
          {allow ? (
            <button className="btn btn--big upload-btn">Upload</button>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
