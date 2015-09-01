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
	res.send(cats);
});

app.post('/cats', function(req, res) {
	var newCat = new Cat(req.body.name, req.body.image, req.body.color);
	cats.push(newCat);
	res.send({ name : newCat._id });
});

app.delete('/cats/:id', function(req, res) {
	for(var i = 0; i < cats.length; i++) {
		if(cats[i]._id.equals(req.params.id)) {
			cats.splice(i, 1);
			return res.send();
		}
	}
	res.status(400).send("You done messed up.");
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});