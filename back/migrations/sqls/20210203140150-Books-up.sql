/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `checkpoint4`.`book` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `synopsis` MEDIUMTEXT NOT NULL,
  `media` VARCHAR(255) NULL,
  `id_author` INT NOT NULL,
  `chapters` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_book_1_idx` (`id_author` ASC) VISIBLE,
  CONSTRAINT `fk_book_1`
    FOREIGN KEY (`id_author`)
    REFERENCES `checkpoint4`.`author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;