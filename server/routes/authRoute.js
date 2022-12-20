const express = require("express");
const JWT = require("../middlewears/jwt");
const upload = require("../middlewears/multer");
const controller = require("../controllers/authController");

const Router = express.Router();

Router.route("/upload").post(
  JWT,
  upload.fields([
    { name: "song", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  controller.UploadSong
);

module.exports = Router;
