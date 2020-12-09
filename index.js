const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

const port = 3000;

// Needed for Templates
const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.send("hello test");
});

// Needed for templates rendering
app.get("/app", (req, res) => {
  res.render("home");
});

server.listen(port, () => {
  console.log(`Running on host: ${port}`);
});
