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

//Song will refer to our object constructor
var Song = require('./models/Song');
var songs = require('./models/DB');
var findSong = require('./my_modules/findSong');

app.get('/songs', function(req, res) {
	res.send(songs);
});

app.get('/songs/:id', function(req, res) {
	findSong(req.params.id, function(err, song) {
		if(err) return res.status(400).send({message: err});
		res.send(song);
	});
});

app.post('/songs', function(req, res) {
	var newSong = new Song(req.body.title, req.body.artist, req.body.album, req.body.albumCover);
	songs.push(newSong);
	res.send({ name : newSong._id});
});

app.put('/songs/:id', function(req, res) {
	findSong(req.params.id, function(err, song) {
		if(err) return res.status(400).send({message: err});
		song.track = req.body.track;
		song.artist = req.body.artist;
		song.album = req.body.album;
		song.albumCover = req.body.albumCover;
		res.send();
	})
})

app.delete('/songs/:id', function(req, res) {
	findSong(req.params.id, function(err, result) {
		if(err) return res.status(400).send({message: err});
		songs.splice(songs.indexOf(result), 1);
		res.send();
	});
});

var server = app.listen(port, function() {
	var host = server.address().address;
	console.log('Example app listening at http://localhost:' + port);
});