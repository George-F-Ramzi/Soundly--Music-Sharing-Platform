const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(
  cors({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
  })
);

app.listen(process.env.PORT, () => {
  console.log("Server Start At: " + process.env.PORT);
});
