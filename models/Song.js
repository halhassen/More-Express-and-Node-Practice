var Guid = require('guid')

var songConstructor = function(track, artist, album, albumCover) {
	this.track = track;
	this.artist = artist;
	this.album = album;
	this.albumCover = albumCover;
	this._id = Guid.create();
}

module.exports = songConstructor;