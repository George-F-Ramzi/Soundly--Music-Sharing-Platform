CREATE DEFINER=`root`@`localhost` PROCEDURE `like_song`(
	local_userId int,
    local_songId int
)
BEGIN
	declare notifierId int;
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Like did not complete';
	END;
    
	start transaction;
		select userId from Songs where id = local_songId into notifierId ;
		insert into Likes (userId,songId)
		values (local_userId,local_songId);
        if local_userId <> notifierId then
			insert into Notifications (triggerId,notifierId,messageId,songId)
			values (local_userId,notifierId ,3,local_songId);
         end if;   
		update Songs set likes = likes + 1 where id = local_songId;
	commit;
END