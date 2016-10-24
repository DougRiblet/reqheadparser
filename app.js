var express = require("express");
    
var app = express();
var port = process.env.PORT || 8040;
 
app.use(function (req, res) {
	var language = req.headers["accept-language"].split(',')[0];
	var agent = req.headers["user-agent"].split(/[\(\)]/)[1];
	var userip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  res.end(JSON.stringify({
  	"ipaddress":userip,
  	"language":language,
  	"software":agent
  }))
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
