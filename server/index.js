const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");

app.use(express.json());
app.use(
  cors({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use("", userRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Start At: " + process.env.PORT);
});
