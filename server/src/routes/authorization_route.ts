import express, { Router } from "express";
import { JwtVerfiy } from "../lib/JWt";
import file_handler from "../lib/multer";
import Upload from "../controllers/upload";
import HomePageData from "../controllers/home_page_data";
import Follow from "../controllers/follow";
import UnFollow from "../controllers/unfollow";
import LikeSong from "../controllers/like_song";
import DislikeSong from "../controllers/dislike_song";
import Comment from "../controllers/comment";
import GetComments from "../controllers/get_comments";
import Search from "../controllers/serach";

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
Handler.route("/comments/:song_id").get(JwtVerfiy, GetComments);
Handler.route("/search/:query").post(JwtVerfiy, Search);

export default Handler;
