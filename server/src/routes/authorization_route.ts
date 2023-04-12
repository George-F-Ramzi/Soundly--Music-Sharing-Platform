import express, { Router } from "express";
import { Upload } from "../controllers/authorization_controller";
import { JwtVerfiy } from "../lib/JWt";

let Handler: Router = express.Router();

Handler.route("/upload").post(JwtVerfiy, Upload);

export default Handler;
