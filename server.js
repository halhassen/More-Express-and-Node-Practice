var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

var animalRoutes = require('./routes/animalRoutes.js');
var movieRoutes = require('./routes/movieRoutes.js');

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

//abstracting an API route
//when someone makes a request at that url, make a request at that module
app.use("/v1/api/animals", animalRoutes);
// console.log(animalRoutes.stack[3].route)
app.use("/v1/api/movies", movieRoutes);

var songRoutes = require('./routes/songRoutes');

//on homepage load, render the index page
app.get('/', function(req, res) {
	console.log("Index loaded")
	res.render('index');
});


app.use('/', songRoutes);

app.use('/', function(req, res) {
	res.status(404).render('404');
})

app.use(function(err, req, res) {
	if(err.type === 'client')
		res.status(400).send(err);
	else
		res.status(500).send({err: "Sorry, there was a problem with the server."})
})



//The routes were added to songRoutes.js

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});