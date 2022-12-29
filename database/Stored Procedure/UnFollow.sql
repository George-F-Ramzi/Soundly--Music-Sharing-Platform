CREATE DEFINER=`root`@`localhost` PROCEDURE `UnFollow`(
	local_followerId int,
    local_beenFollowingId int
)
BEGIN

	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'UnFollowing did not complete';
	END;
    
    start transaction;
		delete from Followers 
		where followerId = local_followerId 
		and beenFollowingId = local_beenFollowingId;
		update Users set followers = followers - 1 where id = local_beenFollowingId;
		update Users set following = following - 1 where id = local_followerId;
	commit;
END