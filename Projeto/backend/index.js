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

let calcular = function (weight, alt, temp, wind, wind2, slope, slope2, vap, reversor) {
    isa = temp - 15;
    qtdAbaixo = 18 - weight;
    qtdAcima = weight - 18;

    if (wind2 == 1 && reversor == 1 && weight <= 18 && slope2 == 1) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 1 && reversor == 1 && weight > 18 && slope2 == 1) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 1 && reversor == 1 && weight > 18 && slope2 == 2) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 1 && reversor == 1 && weight <= 18 && slope2 == 2) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 1 && reversor == 2 && weight <= 18 && slope2 == 1) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 1 && reversor == 2 && weight > 18 && slope2 == 1) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 1 && reversor == 2 && weight > 18 && slope2 == 2) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 1 && reversor == 2 && weight <= 18 && slope2 == 2) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 - 19 * temp / 5 - 42 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 2 && reversor == 2 && weight > 18 && slope2 == 2) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 2 && reversor == 2 && weight <= 18 && slope2 == 2) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 278 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 2 && reversor == 2 && weight > 18 && slope2 == 1) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 2 && reversor == 2 && weight <= 18 && slope2 == 1) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5;
    }

    if (wind2 == 2 && reversor == 1 && weight > 18 && slope2 == 2) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 228 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 2 && reversor == 1 && weight <= 18 && slope2 == 2) {
        this.resultado = 1711 - 80 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 + 228 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 2 && reversor == 1 && weight > 18 && slope2 == 1) {
        this.resultado = 1711 + 79 * qtdAcima / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
    }

    if (wind2 == 2 && reversor == 1 && weight <= 18 && slope2 == 1) {
        this.resultado = 1711 - 79 * qtdAbaixo / 1 + 59 * alt / 1000 + 56 * temp / 5 + 221 * wind / 5 - 28 * slope / 100 + 115 * vap / 5 + 1426;
    }
}

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
    const { brakingApplication } = req.body;
    const { iceBuildup } = req.body;
    const { landingFlap } = req.body;
    const { trackConditions } = req.body;
    const {slopeAngle } = req.body;

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
        "brakingApplication": brakingApplication,
        "iceBuildup": iceBuildup,
        "landingFlap": landingFlap,
        "trackConditions": trackConditions
    }

    calcular(18, airportAltitude, temp, wind, windDirection, slope, slopeAngle, 10, reverser);

    resultado = 42;
});

app.get('/result', (req, res) => {
    res.send({ "result": resultado })
})

app.get('/params', (req, res) => {
    res.send(obj)
})

app.listen(3001, () => {
    console.log('rodando servidor');
});
