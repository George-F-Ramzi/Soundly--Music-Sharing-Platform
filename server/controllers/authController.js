const joi = require("joi");
const lodash = require("lodash");
const mysql = require("../middlewears/database");
const cloudinary = require("../middlewears/cloudinary");

const UploadSong = async (req, res) => {
  const { name } = req.body;
  const { filename: songId, path: songUrl } = req.files.song[0];
  const { filename: photoId, path: photoUrl } = req.files.photo[0];
  const { _Id } = req.user;

  const schema = joi.object({
    name: joi.string().required().max(56),
  });

  const { error } = schema.validate({ name });

  if (error) {
    await cloudinary.uploader.destroy(songId, { resource_type: "video" });
    await cloudinary.uploader.destroy(photoId);
    return res.status(400).json(error.message);
  }

  try {
    await mysql.query("call Upload(?,?,?,?,?,?)", [
      name,
      songUrl,
      songId,
      photoUrl,
      photoId,
      _Id,
    ]);
    res.status(200).send("Song Uploaded Successfully");
  } catch (error) {
    await cloudinary.uploader.destroy(songId, { resource_type: "video" });
    await cloudinary.uploader.destroy(photoId);
    res.status(400).send("Upload Song Did Not Complete");
  }
};

const Follow = async (req, res) => {
  const { _Id } = req.user;
  const { userId } = req.params;

  try {
    if (_Id === userId) throw Error("You Can't Follow Your Self");
    await mysql.query("call Follow(?,?)", [_Id, userId]);
    res.status(200).send("Following Done");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const UnFollow = async (req, res) => {
  const { _Id } = req.user;
  const { userId } = req.params;

  try {
    if (_Id === userId) throw Error("You Can't UnFollow Your Self");
    await mysql.query("call UnFollow(?,?)", [_Id, userId]);
    res.status(200).send("UnFollowing Done");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const Discover = async (req, res) => {
  try {
    const result = await mysql.query("call Discover()");
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const Artists = async (req, res) => {
  try {
    const result = await mysql.query("call Artists()");
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const NavBar = async (req, res) => {
  const { _Id } = req.user;
  const findSql = "select id,photoUrl from Users where id = ?";
  try {
    const profile = await mysql.query(findSql, [_Id]);
    if (lodash.isEmpty(profile[0][0])) {
      throw Error("Profile Did Not Exist");
    }
    res.status(200).json(profile[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const GetSong = async (req, res) => {
  const { songId, userId } = req.params;
  try {
    const song = await mysql.query("call GetSong(?,?)", [songId, userId]);
    if (lodash.isEmpty(song[0][0])) {
      throw Error("Song Did Not Exist");
    }
    res.status(200).json(song[0][0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const DidIFollow = async (req, res) => {
  const { userId } = req.params;
  const { _Id } = req.user;

  if (userId == _Id) {
    return res.status(205).send("That's You");
  }

  const sqlStatment =
    "select * from Followers where followerId = ? and beenFollowingId = ?";
  try {
    const song = await mysql.query(sqlStatment, [_Id, userId]);
    if (lodash.isEmpty(song[0][0])) {
      return res.status(204).send("You Don't Follow This User");
    }
    res.status(200).send("You Follow This User");
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const DidILike = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;

  const sqlStatment = "select * from Likes where userId = ? and songId = ?";
  try {
    const song = await mysql.query(sqlStatment, [_Id, songId]);
    if (lodash.isEmpty(song[0][0])) {
      return res.status(204).send("You Don't Liked This Song");
    }
    res.status(200).send("You Liked This User");
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const Like = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;

  try {
    await mysql.query(" Call like_song(?,?)", [_Id, songId]);
    res.status(200).send("Song Liked Successfully");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const DisLike = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;

  try {
    await mysql.query(" Call dislike_song(?,?)", [_Id, songId]);
    res.status(200).send("Song Disliked Successfully");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const LikedSongs = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await mysql.query(" Call liked_songs(?)", [userId]);
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const UploadedSongs = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await mysql.query(" Call uploaded_songs(?)", [userId]);
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const GetProfile = async (req, res) => {
  const { userId } = req.params;

  const sqlStatment =
    "select username, photoUrl, songs,followers,following from Users where id = ?";

  try {
    const result = await mysql.query(sqlStatment, [userId]);
    if (lodash.isEmpty(result[0][0])) {
      throw Error("Profile Did Not Exist");
    }
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const EditProfileImage = async (req, res) => {
  const { path, filename } = req.file;
  const { _Id } = req.user;

  const sqlstatment =
    "update Users set photoUrl = ? , photoId = ? where id = ?";

  try {
    await mysql.query(sqlstatment, [path, filename, _Id]);
    res.status(200).send("Updated Successfully");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

module.exports = {
  UploadSong,
  Follow,
  UnFollow,
  Discover,
  Artists,
  NavBar,
  GetSong,
  DidIFollow,
  DidILike,
  Like,
  DisLike,
  LikedSongs,
  UploadedSongs,
  GetProfile,
  EditProfileImage,
};
