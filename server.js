var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
//set the view engine that will render HTML from the server to the client
app.engine('.html', require('ejs').renderFile);
//Allow for these directories to be usable on the client side
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
//we want to render html files
app.set('view engine', 'html');
app.set('view options', {
	layout: false
});

//middleware that allows for us to parse JSON and UTF-8 from the body of an HTTP request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//on homepage load, render the index page
app.get('/', function(req, res) {
	res.render('index');
});

//Cat will refer to our object constructor
var Cat = require('./models/Cat');
var cats = require('./models/DB');

app.get('/cats', function(req, res) {
	var myCat = new Cat('Mittens', 'Cornish Rex', 'Orange?')
	res.send(cats);
});

app.get('/dogs', function(req, res) {
	res.send({name: 'Rex', breed:'Malamute', size:'way too big'});
});

app.post('/cats', function(req, res) {
	var newCat = new Cat(req.body.name, req.body.breed, req.body.color);
	cats.push(newCat);
	res.send(cats);
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});