const express = require("express");
const controller = require("../controllers/userController");

const Router = express.Router();

Router.route("/register").post(controller.Register);
Router.route("/login").post(controller.Login);

module.exports = Router;
