const router = require("express").Router();
const authorsRoutes = require("./authors.routes");
const booksRoutes = require("./books.routes");
const categoriesRoutes = require("./categories.route");
const categoriesListRoutes = require("./categoriesList.routes");


router.use("/authors", authorsRoutes);
router.use("/books", booksRoutes);
router.use("/categories", categoriesRoutes);
router.use("/categoriesList", categoriesListRoutes);



module.exports = router;