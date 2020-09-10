
var http = require('http');
var dt= require ('./myfirstmodule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<br>')
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write('<br>')
  res.write("URL string is" + req.url);
  var qstr = url.parse(req.url, true).query;
  var txt = qstr.year + "  " + qstr.month;
  res.write('<br>');
  res.write(txt);
  res.write('<br>');
  res.end('This is my first Node js work');
}).listen(9090);