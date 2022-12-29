CREATE DEFINER=`root`@`localhost` PROCEDURE `Artists`()
BEGIN
	select id,username,followers,photoUrl from Users order by followers desc limit 0,9 ;
END