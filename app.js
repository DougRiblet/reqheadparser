var express = require("express");

var app = express();
var port = process.env.PORT || 8040;


app.get('/', function(req, res) {
  
});

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(200);
});