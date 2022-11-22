const express = require("express");
const fileUpload = require('express-fileupload')
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const CalcularLD = require("./calculo/reader.js");
const fs = require('fs');

const db = mysql.createPool({
    host: 'localhost',
    user: 'rodrigo',
    password: 'fatec',
    database: 'cadastro_aeronave'
});

app.use(cors());
app.use(express.json());
app.use(fileUpload());

let obj;
let resultado;

// receber parametros e calcular
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

// enviar resultado
app.get('/result', (req, res) => {
    res.send({ "result": resultado })
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

// pesquisar aeronave
app.get("/search", (req, res) => {
    const { name } = req.query;
    console.log('pesquisando')
    let SQL =
      "SELECT * from aeronave WHERE nome LIKE ? ";
    db.query(SQL, [`%${name}%`], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });

//pegando as aeronaves
app.get("/getAircraft", (req,res)=>{
    let SQL = "SELECT * FROM aeronave";

    db.query(SQL,(err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    });
});

// pegar aeronave por id
app.get('/getAircraft-by-id', (req, res) => {
    const { id } = req.query;
    console.log('pegando id...')
    let SQL = 
    "SELECT * FROM aeronave WHERE id = ?"
    db.query(SQL, [id], (err, result) => {
        if(err) res.send(err);
        else {
            let sqlFlap = 'SELECT nome FROM flap WHERE aeronave = ?'
            let sqlMotor = 'SELECT nome FROM motor WHERE aeronave = ?'
            let sqlCertificacao = 'SELECT nome FROM certificacao WHERE aeronave = ?'
            let sqlBreak = 'SELECT nome FROM breakconfig WHERE aeronave = ?'

            let flaps = [];
            let motors;
            let certificacoes;
            let breaks;

            // flap
            db.query(sqlFlap, [id], (err, result2) => {
                if(err) res.send(err);
                else {
                    flaps = result2;
                    db.query(sqlMotor, [id], (err, result5) => {
                        if(err) res.send(err);
                        else {
                            motors = result5;
                            db.query(sqlCertificacao, [id], (err, result3) => {
                                if(err) res.send(err);
                                else {
                                    certificacoes = result3;
                                    db.query(sqlBreak, [id], (err, result4) => {
                                        if(err) res.send(err);
                                        else {
                                            breaks = result4;
                                            let resposta = {
                                                name: result[0]['nome'],
                                                brand: result[0]['marca'],
                                                flaps: flaps,
                                                motors: motors,
                                                certificacoes: certificacoes,
                                                breaks: breaks
                                            }
                                            res.send(resposta);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});

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
app.get("/delete", (req, res) => {
    console.log('deletando aeronave...')
    const { id } = req.query;

    let SQL = "DELETE FROM aeronave WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        const file = `./files/${id}.xls`;
        try{fs.unlinkSync(file);}catch(err) {console.log(err)}
        res.send(result);
      }
    });
});

// url backend para baixar tabela de cálculo (modelo)
app.get('/download', (req, res) => {
    const file = './files/table-model.xls';
    res.download(file);
});

app.get('/download-table', (req, res) => {
    const file = './files/Modelo XYZ.xls';
    res.download(file);
});

app.get('/filled-table', (req, res) => {
    const { id } = req.query;
    // por algum motivo é retornado ID?c=1. Linha 242 é para tratar isso e pegar somente o ID
    let idAeronave = id.split('?')[0]
    const file = `./files/${idAeronave}.xls`;
    res.download(file)
});

// enviar tabela p/ backend
app.post('/upload', (req, res) => {
    const arquivo = req.files.upload;
    const { id } = req.query;
    const nomeArquivo = req.files.upload.name;
    let pasta = __dirname + '/files/' + id + '.xls';
    arquivo.mv(pasta, (err) => {
        if(err){
            return res.send(err);
        }
        res.sendStatus(200);
    });
});

app.listen(3001, () => {
    console.log('rodando servidor');
});
