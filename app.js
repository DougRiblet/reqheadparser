var express = require("express");
var bodyParser = require('body-parser')
var get_ip = require('ipware')().get_ip;
    
var app = express();
var port = process.env.PORT || 8040;

// app.use(bodyParser.urlencoded({ extended: false }))
 
// app.use(bodyParser.json())
 
app.use(function (req, res) {
	console.log("=======req.headers: ", req.headers);
	var ip_info = get_ip(req);
	console.log("=====ip: ", req.ip);
	var acceptLanguage = req.headers["accept-language"].split(',');
	var language = acceptLanguage[0];
  res.write('Maybe you posted:\n')
  res.end(JSON.stringify(language + " " + ip_info.clientIp))
})

// app.get('/', function (req, res) {

//   res.send('GET request to homepage');
// });

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});