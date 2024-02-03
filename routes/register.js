const express = require("express");
require("dotenv").config();
const db = require("../db");
const router = express.Router();
// Get all client
router.get("/", async (req, res) => {
  const result = await db.selectCustomers();
  console.log(result);
  return res.json(result);
});

router.get("/company", async (req, res) => {
  const result = await db.selectCompany();
  console.log(result);
  return res.json(result);
});

router.get("/client/edit/:id", async (req, res) => {
    const id = req.params.id;
    const result = await db.selectCustomersId(id);
    console.log(result);
    return res.json(result);
  });

// Add new client
router.post("/client/new", async (req, res) => {
  var erros = [];
  console.log(req.query);
  console.log(req);
  if (
    !req.query.name ||
    typeof req.query.name == undefined ||
    req.query.name == null
  ) {
    erros.push({
      texto: "Nome invalido",
    });
  }
  if (
    !req.query.email ||
    typeof req.query.email == undefined ||
    req.query.email == null
  ) {
    erros.push({
      texto: "Email invalido",
    });
  }
  if (
    !req.query.phone ||
    typeof req.query.phone == undefined ||
    req.query.phone == null
  ) {
    erros.push({
      texto: "Telefone invalido",
    });
  }
  if (req.query.name.length < 10) {
    erros.push({
      texto: "Nome invalido",
    });
  }
  if (erros.length > 0) {
    console.log({ erros: erros });
    return res.json({ erros: erros });
  } else {
    const name = req.query.name;
    const phone = req.query.phone;
    const email = req.query.email;
    const lat = req.query.lat;
    const long = req.query.long;
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer(name, phone, email, lat, long);
    console.log(result.rowCount);
    console.log(result);
    return res.json(`Cliente ${result.rows}`)
  }
});

//update Client
router.put("/client/update/:id", async (req, res) => {  
    if (
    !req.body.name ||
    typeof req.body.name == undefined ||
    req.body.name == null
  ) {
    erros.push({
      texto: "Nome invalido",
    });
  }
  if (
    !req.body.email ||
    typeof req.body.email == undefined ||
    req.body.email == null
  ) {
    erros.push({
      texto: "Email invalido",
    });
  }
  if (
    !req.body.phone ||
    typeof req.body.phone == undefined ||
    req.body.phone == null
  ) {
    erros.push({
      texto: "Telefone invalido",
    });
  }
  if (req.body.name.length < 10) {
    erros.push({
      texto: "webservice invalido",
    });
  }
  if (erros.length > 0) {
    console.log({ erros: erros });
    return res.json({ erros: erros });
  } else {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const id = req.params.id;

    console.log("UPDATE CLIENT");
    const client = await connect();
    const sql = 'UPDATE client SET name = $1,phone=$2,email = $3 where id = $4';
    const values = [name, phone, email, id];
    const result = await client.query(sql, values);
    client.release();
    return res.json(`Cliente ${result.rows[0].id}`)
  }});

  //Delete Client
router.post("/client/delete/:id", async (req, res) => {
    const id = req.params.id;

    console.log("DELETE CLIENT");
    const client = await connect();
    const sql = 'DELETE FROM client where id = $1';
    const values = [id];
    const result = await client.query(sql, values);
    client.release();
    return res.json(`Cliente ${result.rows[0].id}`)
});

module.exports = router;
