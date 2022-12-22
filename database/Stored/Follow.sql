CREATE DEFINER=`root`@`localhost` PROCEDURE `Follow`(
	local_followerId int,
    local_beenFollowingId int
)
BEGIN
	insert into Followers (followerId,beenFollowingId)
    values (local_followerId,local_beenFollowingId);
	insert into Notifications (triggerId,notifierId,messageId)
	values (local_followerId,local_beenFollowingId ,2);
END