CREATE DEFINER=`root`@`localhost` PROCEDURE `search_songs`(
	local_value varchar(999)
)
BEGIN
	select Songs.id,songName,likes,coverUrl,Songs.userId,Users.username
    from Songs join Users 
    on songName regexp concat("^",local_value)
    and Songs.userId = Users.id;
END