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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 17:26:15
