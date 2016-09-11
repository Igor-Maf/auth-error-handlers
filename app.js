var express = require('express');
var app = express();
var fs = require("fs");

app
    .get('/users', function (req, res) {
      fs.readFile("data/users.json", 'utf8', function (err, data) {
        console.log( data );
        res.end( data );
      });
    })
    .get('/languages', function(req, res) {
      fs.readFile("data/languages.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
      });
    });

app.use(express.static(__dirname + '/public'));

var server = app.listen(8081, "127.0.0.1", function () {
  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
});

module.exports = app;