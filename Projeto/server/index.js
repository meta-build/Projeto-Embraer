const express = require ("express");
const app = express();
const mysql = require ("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user: "rodrigo",
    password: "fatec",
    database: "cadastro_aeronave",
});

app.use(cors());
app.use(express.json());

//registrando 
app.post("/register", (req, res) => {
    const { name } = req.body;

    let SQL = "INSERT INTO cadastro ( name ) VALUES ( ? )";

    db.query(SQL, [name], (err, result) => {
        console.log(err);
    });
});

app.post("/search", (req, res) => {
    const { name } = req.body;
  
    let SQL =
      "SELECT * from cadastro WHERE name = ? ";
    db.query(mysql, [name], (err, result) => {
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
    const { id } = req.params;

    let SQL = "DELETE FROM cadastro WHERE idcadastro = ?";

    db.query(SQL, [id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

app.listen(3001, () =>{
    console.log("rodando na porta 3001");
});