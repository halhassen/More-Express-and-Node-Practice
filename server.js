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
var findCat = require('./my_modules/findCat');

app.get('/cats', function(req, res) {
	res.send(cats);
});

app.get('/cats/:id', function(req, res) {
	findCat(req.params.id, function(err, cat) {
		if(err) return res.status(400).send({message:err});
		res.send(cat);
	});
});

app.post('/cats', function(req, res) {
	var newCat = new Cat(req.body.name, req.body.image, req.body.color);
	cats.push(newCat);
	res.send({ name : newCat._id });
});

app.put('/cats/:id', function(req, res) {
	findCat(req.params.id, function(err, cat) {
		if(err) return res.status(400).send({message: err});
		cat.name = req.body.name;
		cat.image = req.body.image;
		cat.color = req.body.color;
		res.send();
	})
});

app.delete('/cats/:id', function(req, res) {
	findCat(req.params.id, function(err, result) {
		if(err) return res.status(400).send({message:err});
		cats.splice(cats.indexOf(result), 1);
		res.send();
	});
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});