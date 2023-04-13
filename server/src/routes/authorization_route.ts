import express, { Router } from "express";
import {
  DislikeSong,
  Follow,
  HomePageData,
  LikeSong,
  UnFollow,
  Upload,
} from "../controllers/authorization_controller";
import { JwtVerfiy } from "../lib/JWt";
import file_handler from "../lib/multer";

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
Handler.route("/follow/:nottifier_id").post(JwtVerfiy, Follow);
Handler.route("/unfollow/:nottifier_id").post(JwtVerfiy, UnFollow);
Handler.route("/like/:song_id/:nottifier_id").post(JwtVerfiy, LikeSong);
Handler.route("/dislike/:song_id").post(JwtVerfiy, DislikeSong);

export default Handler;
