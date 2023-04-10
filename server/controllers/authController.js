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

  const insertStatment = `insert into Songs
    (songName,userId,songUrl,songUrlId,coverUrl,coverId)
    values (?,?,?,?,?,?)`;

  const insertValues = [name, _Id, songUrl, songId, photoUrl, photoId];

  const findFollowers = `select followerId from Followers 
  where beenFollowingId = ?`;

  const SongsInc = `update Users set songs = songs + 1 where id = ?`;

  const Notifiy = `insert into Notifications
  (triggerId,notifierId,messageId,songId)
  values (?,?,?,?)`;

  try {
    const followers = await mysql.query(findFollowers, [_Id]);
    await mysql.query("START TRANSACTION");

    const song = await mysql.query(insertStatment, insertValues);
    await mysql.query(SongsInc, [_Id]);

    if (!lodash.isEmpty(followers[0])) {
      for (let index = 0; index < followers[0].length; index++) {
        await mysql.query(Notifiy, [
          _Id,
          followers[0][index].followerId,
          1,
          song[0].insertId,
        ]);
      }
    }

    await mysql.query("COMMIT");
    res.status(200).send("Song Uploaded Successfully");
  } catch (error) {
    await mysql.query("ROLLBACK");
    await cloudinary.uploader.destroy(songId, { resource_type: "video" });
    await cloudinary.uploader.destroy(photoId);
    res.status(400).send("Upload Song Did Not Complete" + error);
  }
};

const Follow = async (req, res) => {
  const { _Id } = req.user;
  const { userId } = req.params;

  const Follow = `insert into Followers 
  (followerId,beenFollowingId)
  values (?,?)`;

  const FollowingInc = `update Users set following = following + 1 where id = ?`;

  const FollowInc = `update Users set followers = followers + 1 where id = ?`;

  const Notifiy = `insert into Notifications
  (triggerId,notifierId,messageId)
  values (?,?,?)`;

  try {
    if (_Id === userId) throw Error("You Can't Follow Your Self");

    await mysql.query("START TRANSACTION");

    await mysql.query(Follow, [_Id, userId]);
    await mysql.query(FollowingInc, [_Id]);
    await mysql.query(FollowInc, [userId]);
    await mysql.query(Notifiy, [_Id, userId, 2]);

    await mysql.query("COMMIT");
    res.status(200).send("Following Done");
  } catch (error) {
    await mysql.query("ROLLBACK");
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const UnFollow = async (req, res) => {
  const { _Id } = req.user;
  const { userId } = req.params;

  const UnFollow = `delete from Followers where 
  followerId = ? and beenFollowingId = ? `;

  const FollowingDec = `update Users set following = following - 1 where id = ?`;

  const FollowDec = `update Users set followers = followers - 1 where id = ?`;

  try {
    if (_Id === userId) throw Error("You Can't UnFollow Your Self");

    await mysql.query("START TRANSACTION");

    await mysql.query(UnFollow, [_Id, userId]);
    await mysql.query(FollowingDec, [_Id]);
    await mysql.query(FollowDec, [userId]);

    await mysql.query("COMMIT");
    res.status(200).send("UnFollowing Done");
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const HomePage = async (req, res) => {
  const discover = `select Songs.id,Songs.userId,songName,songUrl,coverUrl,Users.username 
    from Songs join Users on Songs.userId = Users.id order by likes desc limit 0,9;`;

  const artists = `select id,photoUrl,username,followers
  from Users order by followers desc limit 0,9`;

  try {
    const result1 = await mysql.query(discover);
    const result2 = await mysql.query(artists);

    res.status(200).json({ discover: result1[0], artists: result2[0] });
  } catch (error) {
    res.status(400).send(error);
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

const Like = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;

  const findSong = `select id,userId from Songs where id = ?`;

  const likeSong = `insert into Likes (userId,songId) values (?,?)`;

  const Notifiy = `insert into Notifications
  (triggerId,notifierId,messageId,songId)
  values (?,?,?,?)`;

  const likeInc = `update Songs set likes = likes + 1 where id = ?`;

  try {
    const song = await mysql.query(findSong, [songId]);
    if (lodash.isEmpty(song[0][0])) {
      throw Error("Song Did Not Exist");
    }

    await mysql.query("START TRANSACTION");

    await mysql.query(likeSong, [_Id, songId]);

    await mysql.query(likeInc, [_Id, songId]);

    if (_Id !== song[0][0].userId) {
      await mysql.query(Notifiy, [_Id, song[0][0].userId, 3, songId]);
    }

    await mysql.query("COMMIT");
    res.status(200).send("Song Liked Successfully");
  } catch (error) {
    await mysql.query("ROLLBACk");
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const DisLike = async (req, res) => {
  const { songId } = req.params;
  const { _Id } = req.user;

  const DELETE = `delete from Likes where userId = ? and songId = ?`;

  const likeDec = `update Songs set likes = likes - 1 where id = ?`;

  try {
    await mysql.query("START TRANSACTION");

    await mysql.query(DELETE, [_Id, songId]);
    await mysql.query(likeDec, [songId]);

    await mysql.query("COMMIT");
    res.status(200).send("Song Disliked Successfully");
  } catch (error) {
    await mysql.query("ROLLBACk");

    res.status(400).send("Something Wrong Happen" + error);
  }
};

const GetProfile = async (req, res) => {
  const { userId } = req.params;
  const { _Id } = req.user;

  const profileSql = `select  id ,username,f.beenFollowingId as Followed, photoUrl, songs,followers,following from Users 
left join Followers as f on followerId = ? and beenFollowingId = ?  where id = ? `;

  const LikedSongs = `select Songs.songUrl, Songs.id,songName,Songs.userId,coverUrl,Users.username
    from Songs join Likes on Songs.id = Likes.songId and Likes.userId = ? 
    join Users on Users.id = Songs.userId`;

  const UploadedSongs = `select Songs.songUrl, Songs.id as id,coverUrl,songName,Users.id as userId,Users.username
    from Songs join Users where Users.id = ? and userId = ?`;

  try {
    const result1 = await mysql.query(profileSql, [_Id, userId, userId]);
    if (lodash.isEmpty(result1[0][0])) {
      throw Error("Profile Did Not Exist");
    }
    const result2 = await mysql.query(LikedSongs, [userId]);
    const result3 = await mysql.query(UploadedSongs, [userId, userId]);

    let finalData = {
      profile: result1[0][0],
      likedSongs: result2[0],
      uploadedSongs: result3[0],
    };

    res.status(200).json(finalData);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const GetSongData = async (req, res) => {
  const { songId } = req.params;

  const sqlStatment =
    "select id,coverUrl,likes,songName,userId from Songs where id = ?";

  try {
    const result = await mysql.query(sqlStatment, [songId]);
    if (lodash.isEmpty(result[0][0])) {
      throw Error("Song Did Not Exist");
    }
    res.status(200).json(result[0][0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const Comment = async (req, res) => {
  const { songId, userId } = req.params;
  const { _Id } = req.user;
  const { details } = req.body;

  const schema = joi.object({
    details: joi.string().required(),
  });

  const { error } = schema.validate({ details });

  if (error) {
    return res.status(400).json(error.message);
  }

  const comment = `insert into Comments (userId,songId,details) values (?,?,?)`;

  const Notifiy = `insert into Notifications
  (triggerId,notifierId,messageId,songId)
  values (?,?,?,?)`;

  try {
    await mysql.query("START TRANSACTION");

    await mysql.query(comment, [_Id, songId, details]);
    await mysql.query(Notifiy, [_Id, userId, 4, songId]);

    await mysql.query("COMMIT");
    res.status(200).send("Commenting Done");
  } catch (error) {
    await mysql.query("ROLLBACK");
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const GetComments = async (req, res) => {
  const { songId } = req.params;

  const GetData = `select details,Comments.userId,Users.username,Users.photoUrl
    from Comments join Users on Comments.userId = Users.id and Comments.songId = ?`;

  try {
    const data = await mysql.query(GetData, [songId]);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const GetInbox = async (req, res) => {
  const { _Id } = req.user;

  const InboxSql = `select triggerId,messageId, Users.photoUrl,songId,Users.username
    from Notifications join Users on Users.id = triggerId and notifierId = ?`;

  try {
    const data = await mysql.query(InboxSql, [_Id]);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const SearchUsers = async (req, res) => {
  const { value } = req.params;

  const SearchSql = `select id,username,photoUrl,followers from Users
    where username regexp concat("^",?);`;

  try {
    const data = await mysql.query(SearchSql, [value]);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

const SearchSongs = async (req, res) => {
  const { value } = req.params;

  const SearchSql = `select Songs.id,songName,likes,coverUrl,Songs.userId,Users.username
    from Songs join Users on songName regexp concat("^",?) and Songs.userId = Users.id;`;

  try {
    const data = await mysql.query(SearchSql, [value]);
    res.status(200).json(data[0]);
  } catch (error) {
    res.status(400).send("Something Wrong Happen" + error);
  }
};

module.exports = {
  UploadSong,
  Follow,
  UnFollow,
  HomePage,
  NavBar,
  Like,
  DisLike,
  GetProfile,
  GetSongData,
  Comment,
  GetComments,
  GetInbox,
  SearchUsers,
  SearchSongs,
};
