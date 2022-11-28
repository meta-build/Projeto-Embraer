const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const CalcularLD = require("./calculo/reader.js");
const CriarTabelaModelo = require("./calculo/criarTabelaModelo.js");
const fs = require("fs");
const xlsx = require("xlsx");
const saltRounds = 10;
const bcrypt = require("bcrypt");

const db = mysql.createPool({
  host: "localhost",
  user: "Rafael",
  password: "Root@123",
  database: "cadastro_aeronave",
});

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// receber parametros e calcular
app.post("/calc", (req, res) => {
  const { aeronavesId } = req.body;
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

  let obj = {
    aeronavesId,
    wind,
    windDirection,
    motor,
    temp,
    slope,
    slopeDirection,
    weight,
    certification,
    airportAltitude,
    overspeed,
    reverser,
    airstripCondition,
    iceBuildup,
    landingFlap,
  };
  console.log(obj);
  let result = { result: CalcularLD(obj) };
  res.send(JSON.stringify({ result }));
});

//registrar aeronave
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { brand } = req.body;

  const { minWeight } = req.body;
  const { maxWeight } = req.body;

  const { minTemp } = req.body;
  const { maxTemp } = req.body;

  const { minSpeed } = req.body;
  const { maxSpeed } = req.body;

  let SQL =
    "INSERT INTO aeronave ( nome, marca, minWeight, maxWeight, minTemp, maxTemp, minSpeed, maxSpeed ) VALUES ( ?, ?, ?, ?, ?, ?, ?, ? )";

  db.query(
    SQL,
    [name, brand, minWeight, maxWeight, minTemp, maxTemp, minSpeed, maxSpeed],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        db.query(
          "SELECT id FROM aeronave WHERE nome = ? AND marca = ?",
          [name, brand],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              const idAeronave = result[0]["id"];
              const { flaps } = req.body;
              const { motors } = req.body;
              const { certis } = req.body;
              const { breakConfigs } = req.body;

              let sqlFlap = "INSERT INTO flap (nome, aeronave) VALUES ( ?, ? )";
              let sqlMotor =
                "INSERT INTO motor (nome, aeronave) VALUES ( ?, ? )";
              let sqlCertificacao =
                "INSERT INTO certificacao (nome, aeronave) VALUES ( ?, ? )";
              let sqlBreak =
                "INSERT INTO breakConfig (nome, aeronave) VALUES ( ?, ? )";

              flaps.forEach((e) => {
                db.query(sqlFlap, [e, idAeronave], (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                });
              });
              motors.forEach((e) => {
                db.query(sqlMotor, [e, idAeronave], (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                });
              });
              certis.forEach((e) => {
                db.query(sqlCertificacao, [e, idAeronave], (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                });
              });
              breakConfigs.forEach((e) => {
                db.query(sqlBreak, [e, idAeronave], (err, result) => {
                  if (err) {
                    console.log(err);
                  }
                });
              });
              res.send({ id: idAeronave });
            }
          }
        );
      }
    }
  );
});

//pegando as aeronaves
app.get("/getAircraft", (req, res) => {
  let SQL = "SELECT * FROM aeronave";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// pesquisar aeronave
app.get("/search", (req, res) => {
  const { name } = req.query;
  console.log("pesquisando");
  let SQL = "SELECT * from aeronave WHERE nome LIKE ? ";
  db.query(SQL, [`%${name}%`], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

// pegar aeronave por id
app.get("/getAircraft-by-id", (req, res) => {
  const { id } = req.query;
  console.log("pegando id...");
  let SQL = "SELECT * FROM aeronave WHERE id = ?";
  db.query(SQL, [id], (err, result) => {
    if (err) res.send(err);
    else {
      let sqlFlap = "SELECT nome FROM flap WHERE aeronave = ?";
      let sqlMotor = "SELECT nome FROM motor WHERE aeronave = ?";
      let sqlCertificacao = "SELECT nome FROM certificacao WHERE aeronave = ?";
      let sqlBreak = "SELECT nome FROM breakconfig WHERE aeronave = ?";

      let flaps = [];
      let motors;
      let certificacoes;
      let breaks;

      // flap
      db.query(sqlFlap, [id], (err, result2) => {
        if (err) res.send(err);
        else {
          flaps = result2;
          db.query(sqlMotor, [id], (err, result5) => {
            if (err) res.send(err);
            else {
              motors = result5;
              db.query(sqlCertificacao, [id], (err, result3) => {
                if (err) res.send(err);
                else {
                  certificacoes = result3;
                  db.query(sqlBreak, [id], (err, result4) => {
                    if (err) res.send(err);
                    else {
                      breaks = result4;
                      let resposta = {
                        id: result[0]["id"],
                        name: result[0]["nome"],
                        brand: result[0]["marca"],
                        minWeight: result[0]["minWeight"],
                        maxWeight: result[0]["maxWeight"],
                        minTemp: result[0]["minTemp"],
                        maxTemp: result[0]["maxTemp"],
                        minSpeed: result[0]["minSpeed"],
                        maxSpeed: result[0]["maxSpeed"],
                        flaps: flaps,
                        motors: motors,
                        certificacoes: certificacoes,
                        breaks: breaks,
                      };
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

  db.query(SQL, [name, id], (err, res) => {
    if (err) {
    } else {
      res.send(result);
    }
  });
});

//usar o usestate e puxar a função de deletar
app.get("/delete", (req, res) => {
  console.log("deletando aeronave...");
  const { id } = req.query;

  let SQL = "DELETE FROM aeronave WHERE id = ?";

  db.query(SQL, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const file = `./files/${id}.xls`;
      try {
        fs.unlinkSync(file);
      } catch (err) {
        console.log(err);
      }
      res.send(result);
    }
  });
});

// url backend para baixar tabela de cálculo (modelo)
app.get("/download", (req, res) => {
  console.log("download...");
  const { lista } = req.query;
  let listagem = lista.split("?")[0].split(",");

  CriarTabelaModelo(listagem, xlsx.readFile("./calculo/tabela.xls"));

  res.download("files/model-created.xls");
  // try { fs.unlinkSync(`${file}`); } catch (err) { console.log(err) }
});

app.get("/download-table", (req, res) => {
  const file = "./files/Modelo XYZ.xls";
  res.download(file);
});

app.get("/filled-table", (req, res) => {
  const { id } = req.query;
  // por algum motivo é retornado ID?c=1. Linha seguinte é para tratar isso e pegar somente o ID
  let idAeronave = id.split("?")[0];
  const file = `./files/${idAeronave}.xls`;
  res.download(file);
});

// enviar tabela p/ backend
app.post("/upload", (req, res) => {
  const arquivo = req.files.upload;
  const { id } = req.query;
  const nomeArquivo = req.files.upload.name;
  let pasta = __dirname + "/files/" + id + ".xls";
  arquivo.mv(pasta, (err) => {
    if (err) {
      return res.send(err);
    }
    res.sendStatus(200);
  });
});

app.post('/verify-table', (req, res) => {
    const arquivo = req.files.upload;
    let pasta = __dirname + '/files/' + 'uploaded-file' + '.xls';
    arquivo.mv(pasta, (err) => {
        if (err) {
            return res.send(err);
        }
        let test_xls = xlsx.readFile(pasta);
        let table_flap = test_xls.SheetNames;
        console.log(table_flap);
        var i=0;
        var validate = "";

        for (let sh of table_flap){
            //console.log(sh);

            let ver = test_xls.Sheets[sh];

            //console.log(ver);
            console.log(ver.B4);
            if  (!ver.B4 ||
                 !ver.M9 ||
                 !ver.N2 ||
                 !ver.O2 ||
                 !ver.P2 ||
                 !ver.Q2){
                
                    validate = false;
                    break;
                 }
                else {
                    validate = true;
            }
            
  
        }
        console.log(validate);

        // chamar função de verificar tabela retornando true p/ tabela correta e false p/ tabela incorreta
        res.send(JSON.stringify({
            verify: validate //resultado da função aqui (colocar no lugar de true)
        }));
        try { fs.unlinkSync(pasta); } catch (err) { console.log(err) }
    });
});

app.listen(3001, () => {
  console.log("rodando servidor");
});

// --------------------------------------------------------------------------------- cadastro usuario ---------------------------------------------------------------------------------

app.post("/registro", (req, res) => {
  const nome = req.body.nomeUsuario;
  const isAdm = req.body.isAdm;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuario (nomeUsuario, isAdm, email, password) VALUE (?,?,?,?)",
          [nome, isAdm, email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: "Usuário cadastrado com sucesso", ok: true });
          }
        );
      });
    } else {
      res.send({ msg: "Email já cadastrado", ok: false });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuario WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response) {
          res.send({
            msg: "Usuário logado",
            ok: true,
            isAdm: result[0].isAdm,
            id: result[0].idusuario,
            exists: true,
          });
        } else {
          res.send({ msg: "Senha incorreta", ok: false, exists: true });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado!", exists: false });
    }
  });
});

app.get("/getUsers", (req, res) => {
  let SQL = "SELECT * FROM usuario";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// pesquisar usuarios
app.get("/searchuser", (req, res) => {
  const { nomeUsuario } = req.query;
  let SQL = "SELECT * from usuario WHERE nomeUsuario LIKE ? ";
  db.query(SQL, [`%${nomeUsuario}%`], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getUser-by-id", (req, res) => {
  const { idusuario } = req.query;
  let SQL = "SELECT * FROM usuario WHERE idusuario = ?";
  db.query(SQL, [idusuario], (err, result) => {
    if (err) res.send(err);
    else {
      let resposta = {
        id: result[0]["idusuario"],
        name: result[0]["nomeUsuario"],
        adm: result[0]["isAdm"],
        email: result[0]["email"],
        password: result[0]["password"],
      };
      res.send(resposta);
      // res.send(result);
    }
  });
});

app.post("/editUser", (req, res) => {
  const { userId } = req.body;
  const { nomeUsuario } = req.body;
  const { isAdm } = req.body;
  const { email } = req.body;
  let SQL =
    "update usuario set nomeUsuario = ?, email = ?, isAdm = ? where idusuario = ?";
  db.query(SQL, [nomeUsuario, email, isAdm, userId], (error, result) => {
    if (error) res.send(error);
    else {
      res.send({ msg: "Usuário cadastrado com sucesso", ok: true });
    }
  });
});

app.post("/deleteUser", (req, res) => {
  const { userId } = req.body;
  let SQL =
    "DELETE FROM usuario WHERE idusuario = ?;";
  db.query(SQL, [userId], (error, result) => {
    if (error) res.send(error);
    else {
      res.send({ msg: "Usuário deletado com sucesso", ok: true });
    }
  });
});

