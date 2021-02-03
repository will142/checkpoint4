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

module.exports = router;