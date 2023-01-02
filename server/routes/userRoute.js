const express = require("express");
const controller = require("../controllers/userController");
const jwt = require("../middlewears/jwt");

const Router = express.Router();

Router.route("/register").post(controller.Register);
Router.route("/login").post(controller.Login);
Router.route("/allow").get(jwt, controller.Login);

module.exports = Router;
