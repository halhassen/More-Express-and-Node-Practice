var Guid = require('guid');
var db = {}; //object holding the array for songs

var Guid = require('guid')

var Song = function(track, artist, album, albumCover) {
	this.track = track;
	this.artist = artist;
	this.album = album;
	this.albumCover = albumCover;
	this._id = Guid.create();
}


db.SongDatabase = [];
db.SongDatabase.push(new Song("Oh My Darling Don't Cry", "Run The Jewels", "Run The Jewels 2", "http://cdn3.pitchfork.com/albums/21227/homepage_large.e0491b02.jpg"));
db.SongDatabase.push(new Song("Pyramids", "Frank Ocean", "Channel Orange", "http://cdn2.pitchfork.com/albums/18028/homepage_large.45e3c196.jpg" ));
db.SongDatabase.push(new Song("Check The Rhyme", "A Tribe Called Quest", "The Low End Theory", "http://www.wruw.org/wp-content/uploads/2015/07/thelowendtheory.jpg"));

db.findSong = function(id, cb) {
	for (var i = 0; i < db.SongDatabase.length; i++) {
		if(db.SongDatabase[i]._id.equals(id)) {
			return cb(null, db.SongDatabase[i]);
		}
	}
	cb('The requested song does not exist. The id was: ' + id);
};

db.addSong = function(song, cb) {
	var newSong = new Song(song.track, song.artist, song.album, song.albumCover);
	db.SongDatabase.push(newSong);
	cb(null, newSong);
}

module.exports = db;