const router = require("express").Router();
const connection  = require("../db");


router.get("/", (req,res) => {
    const sql = "SELECT * FROM author";
    connection.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "no authors in BDD" });
        } else {
            res.status(200).json(result);
        }
    });
})


router.get("/:id", (req,res) => {
    const {id} = req.params;
    const sql = "SELECT * FROM author WHERE id = ?";
    connection.query(sql, [id] ,(err, result) => {
        if (err) {
            res.status(500).json({ errorMessage: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ errorMessage: "author not found" });
        } else {
            res.status(200).json(result);
        }
    });
})

router.get("/name/:name", (req,res) => {
    const {name} = req.params;
    const sql = "SELECT * FROM author AS a JOIN book ON a.id = id_author WHERE a.name = ?";
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

/*
exmple de bode à envoyer pour le post
{
    "name": "Duds Hunt",
    "synopsis": "Nakanishi est jeune commercial qui a du mal à supporter les pressions sociales. C'est un ancien délinquant qui sort d'une maison de redressement. Son métier l'ennui et il ne parvient pas à prendre goût à la vie. Il est régulièrement en conflit avec son supérieur. Un jour, il va faire la connaissance d'une personne sur le net qui lui propose un jeu pour le sortir de la morosité. Ce jeu se nomme : Duds Hunt. Tous les coups y sont permis. Une chasse à l'homme s'engage, dans laquelle chaque participant est équipé d'un pointeur, ainsi que d'un PDA pour localiser ses adversaires. Le but est simple : récupérer le pointeur de l'adversaire, chaque prise rapportant 100 000 yens...",
    "media":"https://images-na.ssl-images-amazon.com/images/I/5112ChbLD4L._SX359_BO1,204,203,200_.jpg",
    "id_author": 1,
    "chapters": 4
}
*/
router.post("/", (req, res) => {
    const { name } = req.body;
    const sql = "INSERT INTO author (name) VALUES (?)";
    connection.query(sql, [name], (err, result) => {
      if (err) {
        res.status(500).json({ errorMessage: err.message });
      } else {
        res.status(200).json(result);
      }
  })
});
module.exports = router;