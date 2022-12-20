const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");

app.use(express.json());
app.use(
  cors({
    exposedHeaders: "x-auth-token",
    methods: "GET,PUT,POST,DELETE",
  })
);

app.use("", userRoute);
app.use("", authRoute);

app.listen(process.env.PORT, () => {
  console.log("Server Start At: " + process.env.PORT);
});
