"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Login_1 = __importDefault(require("../controllers/Login"));
var Join_1 = __importDefault(require("../controllers/Join"));
var Handler = express_1.default.Router();
Handler.route("/login").post(Login_1.default);
Handler.route("/join").post(Join_1.default);
exports.default = Handler;
