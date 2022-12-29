const mysql = require("mysql2");

const db = mysql
  .createPool({
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASS,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_DATABASE,
  })
  .promise();

module.exports = db;
