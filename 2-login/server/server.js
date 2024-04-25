const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.post("/guardarDatos", (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const contrasena = req.body.contrasena;

    db.query('INSERT INTO registro(nombre, email, contrasena) VALUES (?, ?, ?)', 
        [nombre, email, contrasena], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Registro Ok");
            }
    });
});



app.listen(3001, () => {
    console.log("Server Ok 3001");
});