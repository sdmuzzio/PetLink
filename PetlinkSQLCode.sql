-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema petlinktest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema petlinktest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `petlinktest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `petlinktest` ;

-- -----------------------------------------------------
-- Table `tokens_blacklist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tokens_blacklist` ;

CREATE TABLE IF NOT EXISTS `tokens_blacklist` (
  `idtokens_blacklist` INT NOT NULL AUTO_INCREMENT,
  `jti` VARCHAR(36) NOT NULL,
  `user_id` INT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `expires_at` DATETIME NOT NULL,
  PRIMARY KEY (`idtokens_blacklist`),
  UNIQUE INDEX `jti_UNIQUE` (`jti` ASC) VISIBLE)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users` ;

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `surname` VARCHAR(50) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `photo_url` VARCHAR(50) NULL DEFAULT NULL,
  `registered_at` DATETIME NOT NULL,
  `role` ENUM('user', 'admin', 'moderator') NOT NULL,
  `status` ENUM('active', 'banned', 'deleted') NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `posts` ;

CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `message` VARCHAR(255) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `create_date` DATETIME NOT NULL,
  `status` ENUM('active', 'inactive') NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `multimedia_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`post_id`),
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `posts_ibfk_1`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `agreements`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `agreements` ;

CREATE TABLE IF NOT EXISTS `agreements` (
  `agreement_id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `initiating_user_id` INT NOT NULL,
  `receiving_user_id` INT NOT NULL,
  `status` ENUM('pending', 'completed', 'canceled') NOT NULL,
  `start_date` DATETIME NOT NULL,
  `closing_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`agreement_id`),
  INDEX `post_id` (`post_id` ASC) VISIBLE,
  INDEX `initiating_user_id` (`initiating_user_id` ASC) VISIBLE,
  INDEX `receiving_user_id` (`receiving_user_id` ASC) VISIBLE,
  CONSTRAINT `agreements_ibfk_1`
    FOREIGN KEY (`post_id`)
    REFERENCES `posts` (`post_id`),
  CONSTRAINT `agreements_ibfk_2`
    FOREIGN KEY (`initiating_user_id`)
    REFERENCES `users` (`user_id`),
  CONSTRAINT `agreements_ibfk_3`
    FOREIGN KEY (`receiving_user_id`)
    REFERENCES `users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `likes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `likes` ;

CREATE TABLE IF NOT EXISTS `likes` (
  `like_id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`like_id`),
  INDEX `post_id` (`post_id` ASC) VISIBLE,
  INDEX `user_id` (`user_id` ASC) VISIBLE,
  CONSTRAINT `likes_ibfk_1`
    FOREIGN KEY (`post_id`)
    REFERENCES `posts` (`post_id`),
  CONSTRAINT `likes_ibfk_2`
    FOREIGN KEY (`user_id`)
    REFERENCES `users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `reports`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `reports` ;

CREATE TABLE IF NOT EXISTS `reports` (
  `report_id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `reporting_user_id` INT NOT NULL,
  `reason` VARCHAR(255) NOT NULL,
  `report_date` DATETIME NOT NULL,
  `status` ENUM('pending', 'reviewed') NOT NULL,
  PRIMARY KEY (`report_id`),
  INDEX `post_id` (`post_id` ASC) VISIBLE,
  INDEX `reporting_user_id` (`reporting_user_id` ASC) VISIBLE,
  CONSTRAINT `reports_ibfk_1`
    FOREIGN KEY (`post_id`)
    REFERENCES `posts` (`post_id`),
  CONSTRAINT `reports_ibfk_2`
    FOREIGN KEY (`reporting_user_id`)
    REFERENCES `users` (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
