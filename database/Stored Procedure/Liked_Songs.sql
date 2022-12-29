CREATE DEFINER=`root`@`localhost` PROCEDURE `liked_songs`(
	local_userId int
)
BEGIN
	select Songs.id,songName,Songs.userId,coverUrl,likes,Users.username
    from Songs join Likes 
    on Songs.id = Likes.songId and Likes.userId = local_userId
    join Users on Users.id = local_userId;
END