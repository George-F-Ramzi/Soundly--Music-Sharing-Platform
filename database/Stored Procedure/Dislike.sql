CREATE DEFINER=`root`@`localhost` PROCEDURE `dislike_song`(
	local_userId int,
    local_songId int
)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Disliking did not complete';
	END;
    
    start transaction;
		delete from Likes 
		where userId = local_userId 
		and songId = local_songId;
		update Songs set likes = likes - 1 where id = local_songId;
	commit;
END