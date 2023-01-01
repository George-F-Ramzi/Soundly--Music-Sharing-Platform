-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: Soundly
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comments`
--

DROP TABLE IF EXISTS `Comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `songId` int NOT NULL,
  `details` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comments`
--

LOCK TABLES `Comments` WRITE;
/*!40000 ALTER TABLE `Comments` DISABLE KEYS */;
INSERT INTO `Comments` VALUES (8,21,11,'hellow world'),(9,20,10,'Testing Comments'),(10,20,10,'Testing Comments'),(11,20,11,'Testing Comments ON Other Route'),(12,20,10,'G'),(13,20,10,'sadasd'),(14,20,11,'Test Notifications'),(15,20,11,'HI');
/*!40000 ALTER TABLE `Comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Followers`
--

DROP TABLE IF EXISTS `Followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Followers` (
  `followerId` int NOT NULL,
  `beenFollowingId` int NOT NULL,
  PRIMARY KEY (`followerId`,`beenFollowingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Followers`
--

LOCK TABLES `Followers` WRITE;
/*!40000 ALTER TABLE `Followers` DISABLE KEYS */;
INSERT INTO `Followers` VALUES (12,43),(12,432),(20,21),(20,22),(20,23),(20,25),(20,27);
/*!40000 ALTER TABLE `Followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Likes`
--

DROP TABLE IF EXISTS `Likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Likes` (
  `userId` int NOT NULL,
  `songId` int NOT NULL,
  PRIMARY KEY (`userId`,`songId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Likes`
--

LOCK TABLES `Likes` WRITE;
/*!40000 ALTER TABLE `Likes` DISABLE KEYS */;
INSERT INTO `Likes` VALUES (20,10),(20,11),(20,12),(20,13),(20,14),(20,16),(20,21);
/*!40000 ALTER TABLE `Likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `NotificationMessage`
--

DROP TABLE IF EXISTS `NotificationMessage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `NotificationMessage` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Details` varchar(455) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `NotificationMessage`
--

LOCK TABLES `NotificationMessage` WRITE;
/*!40000 ALTER TABLE `NotificationMessage` DISABLE KEYS */;
INSERT INTO `NotificationMessage` VALUES (1,'Upload A New Song'),(2,'Started Following You'),(3,'Likes Your Song'),(4,'Commented On Your Song');
/*!40000 ALTER TABLE `NotificationMessage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Notifications`
--

DROP TABLE IF EXISTS `Notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `triggerId` int NOT NULL,
  `notifierId` int NOT NULL,
  `messageId` int NOT NULL,
  `songId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notifications`
--

LOCK TABLES `Notifications` WRITE;
/*!40000 ALTER TABLE `Notifications` DISABLE KEYS */;
INSERT INTO `Notifications` VALUES (86,21,20,4,10),(87,23,20,2,NULL),(88,23,20,1,15),(89,26,23,2,NULL),(90,20,23,3,15),(91,20,21,3,11),(92,20,22,2,NULL),(93,20,22,2,NULL),(94,20,21,4,11),(95,20,23,2,NULL),(96,20,23,2,NULL),(97,20,24,2,NULL),(98,20,24,2,NULL),(99,20,23,2,NULL);
/*!40000 ALTER TABLE `Notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Songs`
--

DROP TABLE IF EXISTS `Songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `songName` varchar(255) NOT NULL,
  `songUrl` varchar(455) NOT NULL,
  `songUrlId` varchar(455) NOT NULL,
  `likes` int DEFAULT '0',
  `comments` int DEFAULT '0',
  `coverUrl` varchar(455) NOT NULL,
  `coverId` varchar(455) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Songs`
--

LOCK TABLES `Songs` WRITE;
/*!40000 ALTER TABLE `Songs` DISABLE KEYS */;
INSERT INTO `Songs` VALUES (10,20,'hello world','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671874483/lkncnjyfkjbevyzo4erg.ogg','lkncnjyfkjbevyzo4erg',23,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671874480/ife3drnzcynhw5hrqj8e.png','ife3drnzcynhw5hrqj8e'),(11,21,'Sad Ambient','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671875364/lk9zrpfj8dpdxapge5vt.mp3','lk9zrpfj8dpdxapge5vt',978,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671875360/vdlluazqlljvw6t9rq67.webp','vdlluazqlljvw6t9rq67'),(12,22,'Caty Song','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671875540/azm3sdqqaqb3yjjinypn.mp3','azm3sdqqaqb3yjjinypn',45,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671875539/zmxromkkjvbpagf4edq8.jpg','zmxromkkjvbpagf4edq8'),(13,22,'Lonely','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671875648/iuetdkjrn29jykmxafll.mp3','iuetdkjrn29jykmxafll',634,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671875646/t6c1so0pa3sf1s3l7jbz.webp','t6c1so0pa3sf1s3l7jbz'),(14,23,'Red Skies','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671875833/q2binrqurdoi8lup6q17.mp3','q2binrqurdoi8lup6q17',885,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671875833/yvwujixe0n6bwhxbllr7.webp','yvwujixe0n6bwhxbllr7'),(15,23,'Xms','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671875930/pkrpo57qxigb8wf43rdx.mp3','pkrpo57qxigb8wf43rdx',24,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671875928/zjvvozkjaoar30oe7evr.webp','zjvvozkjaoar30oe7evr'),(16,26,'Epic','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671876051/gu1twplmgc6bfnuqtgvl.mp3','gu1twplmgc6bfnuqtgvl',679,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671876050/mu6h3cbxqup1nq2n9hzd.webp','mu6h3cbxqup1nq2n9hzd'),(17,26,'In The Forest','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671876167/wnv5pbqazkcfxqf7agau.mp3','wnv5pbqazkcfxqf7agau',12,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671876166/hqw5jqgh0mlx6sdttwqg.webp','hqw5jqgh0mlx6sdttwqg'),(18,26,'Back Home','https://res.cloudinary.com/dwnvkwrox/video/upload/v1671876252/gchix4kw7k2t8a6uojbl.mp3','gchix4kw7k2t8a6uojbl',53,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671876252/xvjvok4twpyfsdyf5qzs.webp','xvjvok4twpyfsdyf5qzs'),(21,20,'Learning','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672307792/wns3toubquibtzneuhsz.mp3','wns3toubquibtzneuhsz',1,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672307765/rera4ejcpe2mvowtgwy5.webp','rera4ejcpe2mvowtgwy5');
/*!40000 ALTER TABLE `Songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(455) NOT NULL,
  `followers` int DEFAULT '0',
  `following` int DEFAULT '0',
  `songs` int DEFAULT '0',
  `photoUrl` varchar(455) NOT NULL DEFAULT 'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png',
  `photoId` varchar(455) NOT NULL DEFAULT '123456789',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (19,'Test','test@test.com','$2b$10$GQEfMYwwp1Bf35GX3..07.6O/WldfBvp4D.TlZiLt3eTe6rLyPXxW',2440,123,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(20,'Zack','1@1.com','$2b$10$3gTCLTThRQdsORZnwvzOm.1C61B9yfE/nrqnEqqjSaHY1sJQhd9xe',672,529,2,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672144611/xokrayxsg59bwfdsikwb.webp','xokrayxsg59bwfdsikwb'),(21,'Jack','2@2.com','$2b$10$Am6A7./QieH0cyDJNq1b..kCJPoJ/T2ZGKy0hiEBlQD3pgEU5VdSq',23418,768,2,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(22,'George','3@3.com','$2b$10$xzduHNFnpRSxhZU71okp7ue/NSTg4gTBpx38bwZD1lNyN0stcFl1a',96764,4,2,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(23,'Sara','5@5.com','$2b$10$TCrxw3ktmfzMed0hVJm0Y.dbEPNUpj6lKO23Nc/Bnin1w3g.Bzpe2',67851,235,2,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(24,'Trex','7@6.com','$2b$10$umL4Anhr3aZ1y8DPIEqlw.HpJY4I4O7OiPcdET6kQDksrba5AENd.',34338,234,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(25,'Trader','t@t.com','$2b$10$0Kamj/unBwUSpfw3IiDzPO0AXm62ILBV0CwgNgF8gcfnloA0Cjrn2',980882,420,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(26,'Lil x-2','9@9.com','$2b$10$5G9jT..JrjyYef6VmAOA8.EtoNXzGjmYIA/R7anRRbzgzTPOLm3kW',230,234,3,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(27,'Lil x-y','9@4.com','$2b$10$5F4F5WvfOrIzw8b/.HpmFeRnUhLrXcRPzwJG1OT5JVTCRv77Acyf.',5459,2,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'Soundly'
--

--
-- Dumping routines for database 'Soundly'
--
/*!50003 DROP PROCEDURE IF EXISTS `Artists` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Artists`()
BEGIN
	select id,username,followers,photoUrl from Users order by followers desc limit 0,9 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Comment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Comment`(
	local_userId int,
    local_songId int,
	local_notifierId int,
    local_details varchar(999)
)
BEGIN
	DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000'
		SET MESSAGE_TEXT = 'Commenting did not complete';
	END;
        start transaction;
		insert into Comments (userID,songId,details)
        values (local_userId,local_songId,local_details);
		if local_userId <> local_notifierId then
			insert into Notifications (triggerId,notifierId,messageId,songId)
			values (local_userId,local_notifierId,4,local_songId);
        end if;     
	commit;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Discover` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Discover`()
BEGIN
	select Songs.id,Songs.userId,songName,songUrl,likes,coverUrl,Users.username 
    from Songs join Users on Songs.userId = Users.id limit 0,9;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `dislike_song` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Follow` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCommentsData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCommentsData`(
	local_songId int
)
BEGIN
	select details,Comments.userId,Users.username,Users.photoUrl
    from Comments join Users 
    on Comments.userId = Users.id and Comments.songId = local_songId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetSong` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetSong`(
	local_songId int,
    local_userId int
   
)
BEGIN
	select Songs.id,userId,songName,songUrl,coverUrl,Users.username 
    from Songs join Users 
    on Songs.id = local_songId and Users.id = local_userId ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Inbox` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `Inbox`(
	local_userId int 
)
BEGIN
	select triggerId,messageId, Users.photoUrl,songId,Users.username
    from Notifications join Users 
    on Users.id = triggerId and notifierId = local_userId; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `liked_songs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `liked_songs`(
	local_userId int
)
BEGIN
	select Songs.id,songName,Songs.userId,coverUrl,likes,Users.username
    from Songs join Likes 
    on Songs.id = Likes.songId and Likes.userId = local_userId
    join Users on Users.id = local_userId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `like_song` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `search_songs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `search_songs`(
	local_value varchar(999)
)
BEGIN
	select Songs.id,songName,likes,coverUrl,Songs.userId,Users.username
    from Songs join Users 
    on songName regexp concat("^",local_value)
    and Songs.userId = Users.id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `search_users` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `search_users`(
	local_value varchar(999)
)
BEGIN
	select id,username,photoUrl,followers from Users
    where username regexp concat("^",local_value);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `UnFollow` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Upload` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `uploaded_songs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `uploaded_songs`(
	local_userId int
)
BEGIN
	select Songs.id as id,coverUrl,likes,songName,Users.id as userId,Users.username
    from Songs join Users 
    where Users.id = local_userId and userId = local_userId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 18:24:45
