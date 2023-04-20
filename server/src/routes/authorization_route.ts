import express, { Router } from "express";
import { JwtVerfiy } from "../lib/JWt";
import file_handler from "../lib/multer";
import Upload from "../controllers/upload";
import HomePageData from "../controllers/home";
import Follow from "../controllers/follow";
import UnFollow from "../controllers/unfollow";
import LikeSong from "../controllers/like";
import DislikeSong from "../controllers/dislike";
import Comment from "../controllers/comment";
import Search from "../controllers/serach";
import Me from "../controllers/me";
import Inbox from "../controllers/inbox";
import ArtistPage from "../controllers/artist_page";
import SongPage from "../controllers/song_page";
import LikedSongs from "../controllers/liked_songs";

let Handler: Router = express.Router();

Handler.route("/upload").post(
  JwtVerfiy,
  file_handler.fields([
    { name: "song_file", maxCount: 1 },
    { name: "cover_file", maxCount: 1 },
  ]),
  Upload
);

Handler.route("/home").get(JwtVerfiy, HomePageData);
Handler.route("/follow/:artist_id").post(JwtVerfiy, Follow);
Handler.route("/unfollow/:artist_id").post(JwtVerfiy, UnFollow);
Handler.route("/like/:song_id").post(JwtVerfiy, LikeSong);
Handler.route("/dislike/:song_id").post(JwtVerfiy, DislikeSong);
Handler.route("/comment/:song_id").post(JwtVerfiy, Comment);
Handler.route("/artist/:artist_id").get(JwtVerfiy, ArtistPage);
Handler.route("/song/:song_id").get(JwtVerfiy, SongPage);
Handler.route("/liked_songs").get(JwtVerfiy, LikedSongs);
Handler.route("/search/:query").post(JwtVerfiy, Search);
Handler.route("/me").get(JwtVerfiy, Me);
Handler.route("/inbox").get(JwtVerfiy, Inbox);

export default Handler;
