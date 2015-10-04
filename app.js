// dependencies
var express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

// TODO routes go here

// view engines setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.render('index', { title: 'Clark Hinchcliff'})
})

app.listen(3000)

console.log('The server is running at http://localhost:3000');