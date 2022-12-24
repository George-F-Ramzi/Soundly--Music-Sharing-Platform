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

Router.route("/follow/:userId").post(JWT, controller.Follow);
Router.route("/unfollow/:userId").post(JWT, controller.UnFollow);
Router.route("/discover").get(JWT, controller.Discover);
Router.route("/artists").get(JWT, controller.Artists);
Router.route("/comment/:songId").post(JWT, controller.DoComment);
Router.route("/profile/:userId").get(JWT, controller.GetProfile);

module.exports = Router;
