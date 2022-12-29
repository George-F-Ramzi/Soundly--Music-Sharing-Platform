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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-29 17:26:15
