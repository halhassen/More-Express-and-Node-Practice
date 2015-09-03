var express = require("express");
var router = express.Router();

//GET
router.get('/', function(req, res) {
	res.send("You got movies")
});


router.post('/new', function(req, res) {
	res.send("You posted a movie")
});

router.put('/edit/:id', function(req, res) {
	res.send("You updated a movie with an id of: " + req.params.id)
});

router.delete('/delete/:id', function(req, res) {
	res.delete("Deleted a movie with an id of: " + req.params.id)
})

module.exports = router;