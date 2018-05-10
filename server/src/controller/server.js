var __PORT = 2981;

var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res, next) {
  try {
    var html = "<body><div>Hello New DK DFS World __dirname = " + __dirname +"</div></body>";
    res.send(html);
  } catch (e) {
    next(e);
  }
})

app.listen(process.env.PORT || __PORT, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || __PORT))
})
