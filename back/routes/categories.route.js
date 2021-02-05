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
});


router.get("/:id", (req,res) => {
  const {id} = req.params;
  const sql = "SELECT * FROM categories WHERE id = ?";
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
    const { name } = req.body;
    const sql = "INSERT INTO categories (name) VALUES (?)";
    connection.query(sql, [name], (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
  })
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    const sql = "DELETE FROM categoriesList WHERE id_categories = ?";
    connection.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else if (result.length === 0) {
        const sql2 = "DELETE FROM categories WHERE id = ?"
        connection.query(sql2, [id], (errOne, resultOne) => {
            if (err) {
              res.status(500).json({ errorMessage: errOne.message });
            } else {
              res.status(200).json(resultOne);
            }
        })
      } else {
        const sql2 = "DELETE FROM categories WHERE id = ?"
        connection.query(sql2, [id], (errOne, resultOne) => {
            if (err) {
              res.status(500).json({ errorMessage: errOne.message });
            } else {
              res.status(200).json(resultOne);
            }
        })
      }
  })
});

module.exports = router;