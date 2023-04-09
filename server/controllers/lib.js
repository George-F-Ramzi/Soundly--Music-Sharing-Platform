const mysql = require("../middlewears/database");

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
      } else a.following = false;
    }
  });

  return atristsResult[0];
}

module.exports = { Artists };
