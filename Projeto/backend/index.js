const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const CalcularLD = require("./calculo/calculo.js");

const db = mysql.createPool({
    host: 'localhost',
    user: 'rodrigo',
    password: 'fatec',
    database: 'cadastro_aeronave'
});

app.use(cors());
app.use(express.json());

let obj;
let resultado;

app.post('/calc', (req, res) => {
    const { aircraftModel } = req.body;
    const { wind } = req.body;
    const { windDirection } = req.body;
    const { motor } = req.body;
    const { temp } = req.body;
    const { slope } = req.body;
    const { weight } = req.body;
    const { certification } = req.body;
    const { airportAltitude } = req.body;
    const { overspeed } = req.body;
    const { reverser } = req.body;
    const { airstripCondition } = req.body;
    const { iceBuildup } = req.body;
    const { landingFlap } = req.body;
    const { slopeDirection } = req.body;

    obj = {
        "aircraftModel": aircraftModel,
        "wind": wind,
        "windDirection": windDirection,
        "motor": motor,
        "temp": temp,
        "slope": slope,
        "slopeDirection": slopeDirection,
        "weight": weight,
        "certification": certification,
        "airportAltitude": airportAltitude,
        "overspeed": overspeed,
        "reverser": reverser,
        "airstripCondition": airstripCondition,
        "iceBuildup": iceBuildup,
        "landingFlap": landingFlap,
    }

    resultado = CalcularLD(obj);
});

app.get('/result', (req, res) => {
    res.send({ "result": resultado })
});

app.get('/params', (req, res) => {
    res.send(obj)
});

//registrando 
app.post("/register", (req, res) => {
    const { name } = req.body;

    let SQL = "INSERT INTO cadastro ( name ) VALUES ( ? )";

    db.query(SQL, [name], (err, result) => {
        console.log(err);
    });
});

app.get("/search", (req, res) => {
    const { name } = req.query;
    console.log('pesquisando')
    let SQL =
      "SELECT * from cadastro WHERE name LIKE ? ";
    db.query(SQL, [`%${name}%`], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

//pegando as informações
app.get("/getAircraft", (req,res)=>{
    let SQL = "SELECT * FROM cadastro";

    db.query(SQL,(err,result)=>{
        if (err) console.log(err);
        else res.send(result);

    });
});

app.get('/getAircraftById', (req, res) => {
    const { id } = req.query;
    console.log('pegando id...')
    let SQL = 
    "SELECT * FROM cadastro WHERE idcadastro = ?"
    db.query(SQL, [id], (err, result) => {
        if(err) res.send(err);
        res.send(result);
        console.log(result)
    });
})

//editando
app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;

    let SQL = "UPDATE cadastro SET name = ? WHERE idcadastro = ?"; //

    db.query(SQL, [name, id], (err, res)=> {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//usar o usestate e puxar a função de deletar
app.delete("/delete", (req, res) => {
    const { id } = req.body;

    let SQL = "DELETE FROM cadastro WHERE idcadastro = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () => {
    console.log('rodando servidor');
});

// url backend para baixar arquivo
app.get('/download', (req, res) => {
    const file = './files/tabela.txt';
    res.download(file);
})
