const mysql = require("mysql2");

const db = mysql
  .createPool({
    host: "localhost",
    password: process.env.DATABASE_PASS,
    user: "root",
    database: "Soundly",
  })
  .promise();

module.exports = db;
