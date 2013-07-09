var fs = require('fs');
var fdata = fs.readFileSync('index.html', 'utf-8');
var max_len = Buffer.byteLength(fdata, 'utf8');
var buf = new Buffer(max_len);
buf.write(fdata, 'utf-8');
var disp = buf.toString('utf-8');
console.log(disp);
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(disp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
