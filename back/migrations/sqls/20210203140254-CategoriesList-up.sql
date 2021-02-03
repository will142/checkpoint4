/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS `checkpoint4`.`categoriesList` (
  `id_book` INT NOT NULL,
  `id_categories` INT NOT NULL,
  INDEX `fk_categoriesList_1_idx` (`id_book` ASC) VISIBLE,
  INDEX `fk_categoriesList_2_idx` (`id_categories` ASC) VISIBLE,
  CONSTRAINT `fk_categoriesList_1`
    FOREIGN KEY (`id_book`)
    REFERENCES `checkpoint4`.`book` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_categoriesList_2`
    FOREIGN KEY (`id_categories`)
    REFERENCES `checkpoint4`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;