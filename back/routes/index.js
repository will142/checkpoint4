const router = require("express").Router();
const authorsRoutes = require("./authors.routes");
const booksRoutes = require("./books.routes");
const categoriesRoutes = require("./categories.route")



router.use("/authors", authorsRoutes);
router.use("/books", booksRoutes);
router.use("/categories", categoriesRoutes);



module.exports = router;