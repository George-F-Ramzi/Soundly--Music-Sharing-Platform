const mysql = require("mysql2");

const db = mysql
  .createPool({
    uri: process.env.DATABASE_URL,
  })
  .promise();

module.exports = db;
