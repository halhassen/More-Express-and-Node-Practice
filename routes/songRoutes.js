var express = require('express');
var router = express.Router();
var songs = require('../models/DB');

router.use(function(req, res, next) {
	console.log(req.method + ' | ' + req.path);
	next();
});

router.param('id', function(req, res, next, id) {
	songs.findSong(req.params.id, function(err, song) {
		//the below takes care of all future errors
		if(err) return next({err: err, type: 'client'});
		req.song = song;
		next();
	});
})
//GET /songs
router.get('/songs', function(req, res) {
	res.send(songs.SongDatabase);
});

//GET /songs/{songId}
router.get('/songs/:id', function(req, res) {
	//because of the router.param function, errors are taken care of there
	res.send(req.song)
});

//POST /songs
router.post('/songs', function(req, res) {
	songs.addSong(req.body, function(err, song) {
		//there will not be an error in this example
		res.send({ name : newSong._id});
	})
});

//PUT /songs/{songId}
router.put('/songs/:id', function(req, res) {
	req.song.track = req.body.track;
	req.song.artist = req.body.artist;
	req.song.album = req.body.album;
	req.song.albumCover = req.body.albumCover;
	res.send();
});

router.delete('/songs/:id', function(req, res) {
	songs.SongDatabase.splice(songs.SongDatabase.indexOf(req.song), 1);
	res.send();
});

module.exports = router;