const express = require("express");
const JWT = require("../middlewears/jwt");
const Sql = require("../middlewears/sqlMiddlewaer");
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

Router.route("/follow/:userId").post(JWT, Sql, controller.Follow);
Router.route("/unfollow/:userId").post(JWT, Sql, controller.UnFollow);
Router.route("/didIFollow/:userId").get(JWT, Sql, controller.DidIFollow);
Router.route("/didILike/:songId").get(JWT, Sql, controller.DidILike);
Router.route("/discover").get(JWT, controller.Discover);
Router.route("/artists").get(JWT, controller.Artists);
Router.route("/navbar").get(JWT, controller.NavBar);
Router.route("/song/:songId/:userId").get(JWT, Sql, controller.GetSong);
Router.route("/like/:songId").post(JWT, Sql, controller.Like);
Router.route("/dislike/:songId").delete(JWT, Sql, controller.DisLike);
Router.route("/likedSongs/:userId").get(JWT, Sql, controller.LikedSongs);
Router.route("/uploaded/:userId").get(JWT, Sql, controller.UploadedSongs);
Router.route("/getProfile/:userId").get(JWT, Sql, controller.GetProfile);
Router.route("/editProfile").put(
  JWT,
  upload.single("photo"),
  controller.EditProfileImage
);
Router.route("/songData/:songId").get(JWT, Sql, controller.GetSongData);
Router.route("/comment/:songId/:userId").post(JWT, Sql, controller.Comment);
Router.route("/getComments/:songId").get(JWT, Sql, controller.GetComments);
Router.route("/inbox").get(JWT, controller.GetInbox);
Router.route("/search/users/:value").get(JWT, controller.SearchUsers);
Router.route("/search/songs/:value").get(JWT, controller.SearchSongs);

module.exports = Router;
