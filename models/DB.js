var Song = require('./Song');
var SongDatabase = [];
SongDatabase.push(new Song("Oh My Darling Don't Cry", "Run The Jewels", "Run The Jewels 2", "http://cdn3.pitchfork.com/albums/21227/homepage_large.e0491b02.jpg"));
SongDatabase.push(new Song("Pyramids", "Frank Ocean", "Channel Orange", "http://cdn2.pitchfork.com/albums/18028/homepage_large.45e3c196.jpg" ));
SongDatabase.push(new Song("Check The Rhyme", "A Tribe Called Quest", "The Low End Theory", "http://www.wruw.org/wp-content/uploads/2015/07/thelowendtheory.jpg"));

module.exports = SongDatabase;