import express, { Router } from "express";
import Login from "../controllers/Login";
import Join from "../controllers/Join";

let Handler: Router = express.Router();

Handler.route("/login").post(Login);
Handler.route("/join").post(Join);

export default Handler;
