CREATE DEFINER=`root`@`localhost` PROCEDURE `Inbox`(
	local_userId int 
)
BEGIN
	select triggerId,messageId, Users.photoUrl,songId,Users.username
    from Notifications join Users 
    on Users.id = triggerId and notifierId = local_userId; 
END