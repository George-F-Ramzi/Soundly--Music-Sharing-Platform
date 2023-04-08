const mysql = require("../middlewears/database");

async function Discover(id) {
  const discover = `select Songs.id,Songs.userId,songName,songUrl,coverUrl,Users.username,likes 
    from Songs join Users on Songs.userId = Users.id order by likes desc limit 0,9;`;

  const didLiked = `select songId from Likes where userId = ? and songId in (?)`;

  let songsResult = await mysql.query(discover);
  let songId = songsResult[0].map((s) => {
    return s.id;
  });

  let likedResult = await mysql.query(didLiked, [id, songId]);
  let likeId = likedResult[0].map((s) => {
    return s.songId;
  });

  songsResult[0].forEach((s) => {
    for (let index = 0; index < likeId.length; index++) {
      if (s.id === likeId[index]) {
        s.liked = true;
      } else s.liked = false;
    }
  });

  return songsResult[0];
}

async function Artists(id) {
  const artists = `select id,photoUrl,username,followers
  from Users order by followers desc limit 0,9`;

  const didFollow = `select beenFollowingId from Followers where followerId = ? and  beenFollowingId in (?)  ;`;

  let atristsResult = await mysql.query(artists);
  let artistId = atristsResult[0].map((a) => {
    return a.id;
  });

  let followResult = await mysql.query(didFollow, [id, artistId]);
  let followId = followResult[0].map((a) => {
    return a.beenFollowingId;
  });

  atristsResult[0].forEach((a) => {
    for (let index = 0; index < followId.length; index++) {
      if (a.id === followId[index]) {
        a.following = true;
        console.log(a);
      } else a.following = false;
    }
  });

  return atristsResult[0];
}

module.exports = { Discover, Artists };
