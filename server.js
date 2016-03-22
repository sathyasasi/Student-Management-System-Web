var express = require('express');
  app = express();
  var  mongojs = require('mongojs');
  var db = mongojs('sms-dev',['sms-dev']);

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname });
});

var port = Number(process.env.PORT) || 8000;
console.log("server started in 8000");

var server = app.listen(port);
