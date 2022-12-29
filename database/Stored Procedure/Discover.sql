CREATE DEFINER=`root`@`localhost` PROCEDURE `Discover`()
BEGIN
	select Songs.id,Songs.userId,songName,songUrl,likes,coverUrl,Users.username 
    from Songs join Users on Songs.userId = Users.id limit 0,9;
END