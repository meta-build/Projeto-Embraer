const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")

const bancoDados = mysql.createPool({
    host: 'localhost',
    user: 'rodrigo',
    password: 'fatec',
    database: 'treinoreact'
});

app.use(cors());
app.use(express.json());

var obj;
var resultado;

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
    const { slopeAngle } = req.body;

    obj = {
        "aircraftModel": aircraftModel,
        "wind": wind,
        "windDirection": windDirection,
        "motor": motor,
        "temp": temp,
        "slope": slope,
        "slopeDirection": slopeAngle,
        "weight": weight,
        "certification": certification,
        "airportAltitude": airportAltitude,
        "overspeed": overspeed,
        "reverser": reverser,
        "airstripCondition": airstripCondition,
        "iceBuildup": iceBuildup,
        "landingFlap": landingFlap,
    }

    resultado = Math.floor(Math.random() * 5000) + 1000;
});

app.get('/result', (req, res) => {
    res.send({ "result": resultado })
});

app.get('/params', (req, res) => {
    res.send(obj)
});

app.listen(3001, () => {
    console.log('rodando servidor');
});
