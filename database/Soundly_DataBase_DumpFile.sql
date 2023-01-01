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
INSERT INTO `Likes` VALUES (29,45);
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
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notifications`
--

LOCK TABLES `Notifications` WRITE;
/*!40000 ALTER TABLE `Notifications` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Songs`
--

LOCK TABLES `Songs` WRITE;
/*!40000 ALTER TABLE `Songs` DISABLE KEYS */;
INSERT INTO `Songs` VALUES (40,29,'Jon doe','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672556302/inungzzevvoqtgxnxrrd.mp3','inungzzevvoqtgxnxrrd',677,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672556300/zwxqmhdiu5j1ciuccrwv.webp','zwxqmhdiu5j1ciuccrwv'),(41,30,'MarlBoro','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672556410/cmdxqkow3ezp7jdrrhtl.mp3','cmdxqkow3ezp7jdrrhtl',353,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672556407/rpsxpquc1sasxrm79lek.webp','rpsxpquc1sasxrm79lek'),(42,31,'Vintage','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672556681/qokprfzljofubm4b0hne.mp3','qokprfzljofubm4b0hne',123,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672556680/qxqmzowwnbxwhkrwcanu.webp','qxqmzowwnbxwhkrwcanu'),(43,32,'Lorem','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672556833/zqw2unbxbauludtwvvbx.mp3','zqw2unbxbauludtwvvbx',76,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672556830/fn5mqdxlfqs3uau0uxcu.webp','fn5mqdxlfqs3uau0uxcu'),(44,33,'Hello','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672556957/ptf7yloeids5apikmpne.mp3','ptf7yloeids5apikmpne',23,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672556957/pa5zqhgcxv5eabyconv6.jpg','pa5zqhgcxv5eabyconv6'),(45,34,'DemoWorld','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672557134/tjps0z6gumzfs9rtkhst.mp3','tjps0z6gumzfs9rtkhst',65,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672557132/fwcpeksszvrvo81fj3el.jpg','fwcpeksszvrvo81fj3el'),(46,35,'~_~','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672557268/rjn3shp52opvydbygv0f.mp3','rjn3shp52opvydbygv0f',111,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672557263/upxjgxuugzrlbicogdvt.jpg','upxjgxuugzrlbicogdvt'),(47,36,'Phantom','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672557345/pfnafckj0quxknt0a4jz.mp3','pfnafckj0quxknt0a4jz',88,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672557342/xqtqifpgnmzp8qxabbkr.webp','xqtqifpgnmzp8qxabbkr'),(48,37,'Dracula','https://res.cloudinary.com/dwnvkwrox/video/upload/v1672557483/hwe78qwthojs0kbiojnw.mp3','hwe78qwthojs0kbiojnw',43,0,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1672557483/q6uyhvvr3jyyy695xjs4.webp','q6uyhvvr3jyyy695xjs4');
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (29,'George','1@1.com','$2b$10$/ujAgG30oG0jsCZLCBUbUebLpvuV3mqldhBaZtL5uMN1kCLrXtYq.',77,4,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(30,'Trader','2@2.com','$2b$10$IAFwZRX2PjSvB2PnGV4hZOLA7O.7I6pZ8.Jko6hfxlP5rKxiZ0cyi',45,243,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(31,'Sara','3@3.com','$2b$10$XzBN6QJt0wl87Bd.MBRf7.7Qf.cHC4hhr8zzexe6I8vY8NyYazp9.',244,546,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(32,'Lil X_X','4@4.com','$2b$10$LXE/EWKkHWe4uehSnEg90eNDgRUCAlUO7G3Ueslr2BsYij3KzJ7Hi',77,56,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(33,'Lily','5@5.com','$2b$10$lHk.kOPJAl86P3pxBOSg4.ZZezAgLm1Lba8Qmbq.YsRYeZWChpNDW',121,33,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(34,'Jack','6@6.com','$2b$10$MU3JV3Vy5CN.deWkQRGJxeO14tSwXVHRpZCQr7xfLPnlkeYSMD5Wm',654,55,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(35,'Zack','7@7.com','$2b$10$IUzdF2tNBkf/ktC4hxSmbeF.P1gaymRpzmoXomhc2U4z0wOQwA.UC',88,33,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(36,'CArlos','8@8.com','$2b$10$0HsAQckShFGn19QvfyEslewbdMxD2e7/2Yq5tHPqzWRy0vFNgaiIq',33,24,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789'),(37,'Sergi','9@9.com','$2b$10$BSUX/18PgrykK3NuJ0F82en7xGQKLOllNWxCLZn.M/O0u1eicf0pq',22,66,1,'https://res.cloudinary.com/dwnvkwrox/image/upload/v1671018225/123456789.png','123456789');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-01 10:57:07
