//bibliotecas utilizadas
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const { ObjectID } = require("bson");

require("dotenv").config();

//conecta a Api ao banco de dados pela URI que está no .env
const uri = `${process.env.URI}`;

MongoClient.connect(process.env.URI, (error, client) => {
  if (error) {
    return console.log(error);
  }
  db = client.db("Node-API");
  // informa no terminal onde a aplicação está rodando
  app.listen(3000, () => {
    console.log("Servidor está na porta 3000");
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/", (req, res) => {
  var cursor = db.collection("data").find();
});

app.get("/records", (req, res) => {
  db.collection("data")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(404);
      res.render("records.ejs", { data: results });
    });
});

app.post("/records", (req, res) => {
  db.collection("data").insertOne(req.body, (err, result) => {
    if (err) return res.send(400, err);

    console.log("Salvo no Banco de Dados");
    res.status(210);

    res.redirect("/records");
  });
});

app
  .route("/edit/:id")
  .get((req, res) => {
    var id = req.params.id;
    var ObjectId = require("mongodb").ObjectID;

    db.collection("data")
      .find(ObjectID(id))
      .toArray((err, result) => {
        if (err) return res.send(400, err);
        res.render("edit.ejs", { data: result });
      });
  })
  .post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;
    var registration = req.body.registration;
    var ObjectId = require("mongodb").ObjectID;

    db.collection("data").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname,
          registration: registration,
        },
      },
      (err, result) => {
        if (err) return res.send(400, err);
        res.redirect("/records");
        console.log("Atualizado no Banco de Dados");
      }
    );
  });
//configuração da rota delete
app.route("/delete/:id").get((req, res) => {
  var id = req.params.id;

//Deleta o objeto do banco pelo ID
  db.collection("data").deleteOne({ _id: ObjectId(id) }, (err, result) => {
    if (err) return res.send(400, err);
    console.log("Deletado do Banco de Dados!");
    res.redirect("/records");
  });
});
