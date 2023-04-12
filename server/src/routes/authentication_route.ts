import express, { Router } from "express";
import { Join, Login } from "../controllers/authentication_controller";

let Handler: Router = express.Router();

Handler.route("/login").post(Login);
Handler.route("/join").post(Join);

export default Handler;
