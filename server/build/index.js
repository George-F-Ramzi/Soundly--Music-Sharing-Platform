"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var authentication_route_1 = __importDefault(require("./routes/authentication_route"));
var authorization_route_1 = __importDefault(require("./routes/authorization_route"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
    origin: [
        "https://soundly-music-sharing-platform.vercel.app",
        "https://localhost:5173",
    ],
}));
app.use(authentication_route_1.default);
app.use(authorization_route_1.default);
app.listen(process.env.PORT, function () {
    console.log("Server Start At: " + process.env.PORT);
});
