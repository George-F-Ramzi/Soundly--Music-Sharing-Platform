CREATE DEFINER=`root`@`localhost` PROCEDURE `Upload`(
	local_songName varchar(255),
    local_songUrl varchar(455),
    local_songUrlId varchar(455),
    local_coverUrl varchar(455),
    local_coverId varchar(455),
    local_userId int 
)
BEGIN
	declare follower int;
    declare insertedId int;
    declare finished integer default 0;
    declare followers cursor for 
		select followerId from Followers
		where beenFollowingId = local_userId;
    declare continue handler for not found set finished = 1;    
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Upload did not complete';
	END;
    start transaction;
		insert into Songs (songName,songUrl,songUrlId,coverUrl,coverId,userId)
			values (local_songName,local_songUrl,local_songUrlId,local_coverUrl,local_coverId,local_userId);
        SELECT LAST_INSERT_ID() into insertedId;  
		update Users set songs = songs + 1  where id = local_userId;
		open followers;
        notifiy_followers:loop
			fetch followers into follower;
			if finished = 1 then leave notifiy_followers;
			end if;
            insert into Notifications (triggerId,notifierId,messageId,songId)
            values (local_userId,follower,1,insertedId);
        end loop notifiy_followers;
	commit;
END