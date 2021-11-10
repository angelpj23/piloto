const router = require('express').Router();

const fs = require("fs");
const filepath = fs.readFileSync("./resultados.json");
const fileget = JSON.parse(filepath);

router.get('/', (req, res) =>{
    res.send(fileget);
});

module.exports = router;