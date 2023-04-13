import express, { Router } from "express";
import { Upload } from "../controllers/authorization_controller";
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

export default Handler;
