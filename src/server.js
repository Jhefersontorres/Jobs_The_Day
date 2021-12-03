const express = require("express");
const server = express();
const routes = require("./routes");
const path = require("path");

// usando template engine
server.set("view engine", "ejs");

// Mudar a localização da pasta views
server.set("views", path.join(__dirname, "views"));

//habilitar arquivos statics usando a função server.use passando para o servidor qual de qual local será utilizado os arquivos staticos
server.use(express.static("public"));

// usar o req.body
server.use(express.urlencoded({ extended: true }));

// routes
server.use(routes);

server.listen(3000, () =>
  console.log("Servidor esta rodando acesse: http://localhost:3000/")
);
