var songs = require('../models/DB');

var findSong = function(id, cb) {
	for (var i = 0; i < songs.length; i++) {
		if(songs[i]._id.equals(id)) {
			return cb(null, songs[i]);
		}
	}
	cb('The requested song does not exist. The id was: ' + id);
}

module.exports = findSong;