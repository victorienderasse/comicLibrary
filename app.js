var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const http = require('http');

var app = express();
const port = 8888;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function(){
  console.log('server running');
});

const io = require('socket.io').listen(server);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/javascripts', express.static(path.join(__dirname, 'public/javascripts')));
app.use('/public/stylesheets', express.static(path.join(__dirname, 'public/stylesheets')));
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

//Connection BDD
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : '192.168.1.100',
  user : 'root',
  password : '221193m',
  database : 'BD'
});

require('./routes/index.js')(app);

io.sockets.on('connection', function(socket){

  require('./public/javascripts/server.js')(socket, connection);

});

module.exports = app;
