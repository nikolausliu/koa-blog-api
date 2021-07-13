CREATE TABLE IF NOT EXISTS `blog`.`blogs`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `content` longtext NOT NULL,
  `createTime` bigint(0) NOT NULL,
  `authorId` int(0) NOT NULL,
  PRIMARY KEY (`id`)
);