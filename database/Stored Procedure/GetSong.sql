CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSong`(
	local_songId int,
    local_userId int
   
)
BEGIN
	select Songs.id,userId,songName,songUrl,coverUrl,Users.username 
    from Songs join Users 
    on Songs.id = local_songId and Users.id = local_userId ;
END