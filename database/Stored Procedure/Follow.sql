CREATE DEFINER=`root`@`localhost` PROCEDURE `Follow`(
	local_followerId int,
    local_beenFollowingId int
)
BEGIN

	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Follow did not complete';
	END;
    
	start transaction;
		insert into Followers (followerId,beenFollowingId)
		values (local_followerId,local_beenFollowingId);
		insert into Notifications (triggerId,notifierId,messageId)
		values (local_followerId,local_beenFollowingId ,2);
		update Users set followers = followers + 1 where id = local_beenFollowingId;
		update Users set following = following + 1 where id = local_followerId;
	commit;
END