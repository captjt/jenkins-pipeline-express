var express = require("express");
var utils = require("./controllers/utils");
var app = express();

var envOne = process.env.VARIABLE_1;
var envTwo = process.env.VARIABLE_2;

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/add", function(req, res) {
  res.send(utils.add(envOne, envTwo));
});

app.get("/divide", function(req, res) {
  res.send(utils.divide(envOne, envTwo));
});

app.get("/multiply", function(req, res) {
  res.send(utils.multiply(envOne, envTwo));
});

app.get("/subtract", function(req, res) {
  res.send(utils.subtract(envOne, envTwo));
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
