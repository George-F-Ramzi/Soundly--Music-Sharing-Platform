CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCommentsData`(
	local_songId int
)
BEGIN
	select details,Comments.userId,Users.username,Users.photoUrl
    from Comments join Users 
    on Comments.userId = Users.id and Comments.songId = local_songId;
END