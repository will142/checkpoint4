const router = require("express").Router();
const connection  = require("../db");

router.get("/", (req, res) => {
    const sql = "SELECT * FROM categories";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message })
        } else {
            res.status(200).json(result)
        }
    })
})

module.exports = router;
