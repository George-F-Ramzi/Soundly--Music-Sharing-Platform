CREATE DEFINER=`root`@`localhost` PROCEDURE `search_users`(
	local_value varchar(999)
)
BEGIN
	select id,username,photoUrl,followers from Users
    where username regexp concat("^",local_value);
END