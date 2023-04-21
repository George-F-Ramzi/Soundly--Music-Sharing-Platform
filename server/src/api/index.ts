import dotenv from "dotenv";
dotenv.config();
import Responserror from "responserror";
import express, { Express } from "express";
import cors from "cors";
import authentication_route from "../routes/authentication_route";
import authorization_route from "../routes/authorization_route";

const app: Express = express();
let { errorHandler } = new Responserror();

app.use(express.json());
app.use(
  cors({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
    origin: [
      "https://soundly-music-sharing-platform.vercel.app",
      "http://localhost:5173",
    ],
  })
);

app.use("/api", authentication_route, errorHandler);
app.use("/api", authorization_route, errorHandler);

app.listen(process.env.PORT, () => {});
