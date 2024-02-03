const express = require("express");
const app = express();
const port = process.env.PORT || "4000";
const path = require("path");
const register = require("./routes/register");
const flash = require("connect-flash");
const session = require("express-session");
const cors = require("cors");


//Configurações
//Sessão
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "secret",
  })
);
app.use(flash());

const corsOption = {
  origin: "*",
  credentials: false,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
//Rotas
app.use("/", register);

//Dados Servidor
app.listen(port, () => {
  // current timestamp in milliseconds
  let ts = Date.now();
  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  // current hours
  let hours = date_ob.getHours();
  // current minutes
  let minutes = date_ob.getMinutes();
  // current seconds
  let seconds = date_ob.getSeconds();
  const mensagem =
    date +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  console.log(mensagem + " Api is running na url http://localhost:" + port);
});
