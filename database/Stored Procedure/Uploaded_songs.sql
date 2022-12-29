CREATE DEFINER=`root`@`localhost` PROCEDURE `uploaded_songs`(
	local_userId int
)
BEGIN
	select Songs.id as id,coverUrl,likes,songName,Users.id as userId,Users.username
    from Songs join Users 
    where Users.id = local_userId and userId = local_userId;
END