const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const CalcularLD = require("./calculo/calculo.js");
const multer = require('multer');

const db = mysql.createPool({
    host: 'localhost',
    user: 'rodrigo',
    password: 'fatec',
    database: 'cadastro_aeronave'
});

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'files/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
})

const salvarArquivo = multer({storage})

app.use(cors());
app.use(express.json());
app.use(fileUpload());

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

//registrar aeronave 
app.post("/register", (req, res) => {
    const { name } = req.body;
    const { brand } = req.body;

    let SQL = "INSERT INTO aeronave ( nome, marca ) VALUES ( ?, ? )";

    db.query(SQL, [name, brand], (err, result) => {
        if(err){console.log(err);}
        else{
            db.query('SELECT id FROM aeronave WHERE nome = ? AND marca = ?', [name, brand], (err, result) => {
                if(err){console.log(err)}
                else{
                    const idAeronave = result[0]['id']
                    const { flaps } = req.body;
                    const { motors } = req.body;
                    const { certis } = req.body;
                    const { breakConfigs } = req.body;

                    let sqlFlap = 'INSERT INTO flap (nome, aeronave) VALUES ( ?, ? )'
                    let sqlMotor = 'INSERT INTO motor (nome, aeronave) VALUES ( ?, ? )'
                    let sqlCertificacao = 'INSERT INTO certificacao (nome, aeronave) VALUES ( ?, ? )'
                    let sqlBreak = 'INSERT INTO breakConfig (nome, aeronave) VALUES ( ?, ? )'

                    flaps.forEach(e => {
                        db.query(sqlFlap, [e, idAeronave], (err, result) => {
                            if(err){console.log(err)}
                        })
                    });
                    motors.forEach(e => {
                        db.query(sqlMotor, [e, idAeronave], (err, result) => {
                            if(err){console.log(err)}
                        })
                    });
                    certis.forEach(e => {
                        db.query(sqlCertificacao, [e, idAeronave], (err, result) => {
                            if(err){console.log(err)}
                        })
                    });
                    breakConfigs.forEach(e => {
                        db.query(sqlBreak, [e, idAeronave], (err, result) => {
                            if(err){console.log(err)}
                        })
                    });
                    res.send({id: idAeronave})
                }
            });
        }
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

// url backend para baixar tabela de cálculo (modelo)
app.get('/download', (req, res) => {
    const file = './files/tabela.txt';
    res.download(file);
});

app.post('/upload', (req, res) => {
    const arquivo = req.files.upload;
    const nomeArquivo = req.files.upload.name;
    let pasta = __dirname + '/files/' + nomeArquivo;
    arquivo.mv(pasta, (err) => {
        if(err){
            return res.send(err);
        }
        res.sendStatus(200);
    })
});

app.listen(3001, () => {
    console.log('rodando servidor');
});
