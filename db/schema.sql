DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `burger_name` varchar(30) NOT NULL,
    `devoured` boolean
);

