var express = require("express");
var bodyParser = require('body-parser')

var app = express();
var port = 8040;
// process.env.PORT || 

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});