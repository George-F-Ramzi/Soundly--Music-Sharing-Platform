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
    res.status(400).send("Something Wrong Happen");
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
    res.status(400).send("Something Wrong Happen");
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

const GetProfile = async (req, res) => {
  const { userId } = req.params;

  const findSql =
    " select id,email,username,followers,following,songs,photoUrlfrom Users where id = ? ";
  try {
    const profile = await mysql.query(findSql, [userId]);
    if (lodash.isEmpty(profile[0][0])) {
      throw Error("Profile Did Not Exist");
    }
    res.status(200).json(profile[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen");
  }
};

const DoComment = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;
  const { details } = req.body;

  const schema = joi.object({
    details: joi.string().required(),
  });

  const { error } = schema.validate({ details });

  if (error) {
    return res.status(400).send(error.message);
  }

  const insertSql = "insert into Comments values (default,?,?,?)";
  try {
    await mysql.query(insertSql, [_Id, songId, details]);
    res.status(200).send("Commenting Done");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

module.exports = {
  UploadSong,
  Follow,
  UnFollow,
  Discover,
  GetProfile,
  DoComment,
  Artists,
};
