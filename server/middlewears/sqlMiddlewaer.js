const mysql = require("../middlewears/database");

const findProfile = `select id from Users where id = ?`;
const findSong = `select id from Songs where id = ?`;

const Sql = async (req, res, next) => {
  const { userId, songId } = req.params;
  try {
    if (userId) {
      await mysql.query(findProfile, [userId]);
    }
    if (songId) {
      await mysql.query(findSong, [songId]);
    }
    next();
  } catch (error) {
    res.status(400).send("Something wrong happen");
  }
};

module.exports = Sql;
