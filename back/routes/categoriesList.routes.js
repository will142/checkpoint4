const router = require("express").Router();
const connection  = require("../db");


router.get("/", (req,res) => {
    const sql = "SELECT * FROM categoriesList";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "no catégoriesList in BDD" });
        } else {
            res.status(200).json(result);
        }
    });
})


router.get("/:id", (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM categoriesList AS l JOIN categories AS c ON l.id_categories = c.id WHERE l.id_book = ?";
    connection.query(sql, [id] ,(err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "catégoriesList not found for this book" });
        } else {
            res.status(200).json(result);
        }
    });
})


router.post("/", (req, res) => {
    const { id_book, id_categories } = req.body;
    const sql = "INSERT INTO categoriesList (id_book,id_categories) VALUES (?, ?)";
    connection.query(sql, [id_book, id_categories], (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
  })
});
module.exports = router;