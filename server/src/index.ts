import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
import cors from "cors";
import authentication_route from "./routes/authentication_route";
import authorization_route from "./routes/authorization_route";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use(authentication_route);
app.use(authorization_route);

app.listen(process.env.PORT, () => {
  console.log("Server Start At: " + process.env.PORT);
});
