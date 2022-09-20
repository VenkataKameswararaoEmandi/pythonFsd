DROP DATABASE IF EXISTS `person_1`;
CREATE DATABASE `person_1`;
USE `person_1`;
SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;
create table `person`(
`personid` int(4) not null, 
`lastName` varchar(20),
`firstName` varchar(20),
primary key(`personid`)
)ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
insert into person (personid,lastName,firstName) 
values(1,'Kamesh','Venkata'),(2,'Dhoni','Mahi'),(3,'Prabhas','Uppalapati'),(4,'Venkata','Emandi');
				
create table `address`(
`addressid` int(4) not null,
`personid` int(4),
`city` varchar(20),
`state` varchar(20),
primary key(`addressid`)
)ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
insert into address(addressid,personid,city,state)
values(1,2,'Pradesh','Andhra'),(2,3,'Jharkand','Ranchi'),(3,4,'Andhra','Bheemavaram'),(4,1,'Pradesh','Ongole');