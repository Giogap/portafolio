const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "formulariop_db"

});

app.post("/guardarDatos", (req, res) => {
    const nombre = req.body.nombre;
    const genero = req.body.genero;
    const biografia = req.body.biografia;
    const pais = req.body.pais;
    const numero_contacto = req.body.numero_contacto;

    db.query('INSERT INTO datos(nombre, genero, biografia, pais, numero_contacto) VALUES (?, ?, ?, ?, ?)', 
        [nombre, genero, biografia, pais, numero_contacto], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Registro Ok");
            }
    });
})


app.listen(3001, () => {
    console.log("Server Ok 3001");
});