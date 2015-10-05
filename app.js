// dependencies
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

// TODO routes go here
var routes = require('./routes/index');

// view engines setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// parsing and public folder setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// route inclusion
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error with no stacktrace sent to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000)

console.log('The server is running at http://localhost:3000');