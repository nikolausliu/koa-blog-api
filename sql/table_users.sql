CREATE TABLE IF NOT EXISTS `blog`.`users`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);