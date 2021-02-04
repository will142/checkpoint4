const router = require("express").Router();
const connection  = require("../db");


router.get("/", (req,res) => {
    const sql = "SELECT * FROM book";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "no books in BDD" });
        } else {
            res.status(200).json(result);
        }
    });
})

router.get("/:id", (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM book WHERE id = ?";
    connection.query(sql, [id] ,(err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "book not found" });
        } else {
            res.status(200).json(result);
        }
    });
})

router.get("/name/:name", (req,res) => {
    const {name} = req.params;
    const sql = "SELECT * FROM book WHERE name = ?";
    connection.query(sql, [name] ,(err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "book not found" });
        } else {
            res.status(200).json(result);
        }
    });
})

router.get("/categories/:id", (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM categoriesList AS c JOIN book AS b ON c.id_book = b.id WHERE c.id_categories = ?";
    connection.query(sql, [id] ,(err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "book not found" });
        } else {
            res.status(200).json(result);
        }
    });
})

router.post("/", (req, res) => {
    const { name, synopsis, media, id_author, chapters } = req.body;
    const sql = "INSERT INTO book (name,synopsis,media,id_author,chapters) VALUES (?,?,?,?,?)";
    connection.query(sql, [name, synopsis, media, id_author, chapters], (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
  })
});



module.exports = router;