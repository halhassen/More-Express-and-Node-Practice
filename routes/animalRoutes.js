var express = require("express");
var router = express.Router(); //calling a function on express function to Router

// GET all animals
// localhost:3000/v1/api/animals/
router.get("/", function(req, res) {
	console.log(arguments.length)
	res.send('You got animals')
});

// POST new animal
// localhost:3000/v1/api/animals/new
router.post('/new', function(req, res) {
	res.send("You added an animal.")
});

router.param("animal_id", function(req, res, next, id) {
	console.log(id)
	req.animal_id = id;
	next();
});


router.param("info", function(req, res, next, id) {
	console.log(id);
	req.animal_color = "blue";
	next();
});

// UPDATE an animal
// localhost:3000/v1/api/animals/edit/:id
// : finds a param method and runs it if it matches the name
router.put('/edit/:animal_id/:info', function(req, res) {
	res.send("You updated an animal with an id of: " + req.animal_id + " and a fur color of " + req.animal_color)
});

// DELETE an animal
// localhost:3000/v1/api/animals/delete:id
router.delete('/delete/:id', function(req, res) {
	res.send("You exterminated an animal with an id of: " + req.params.id)
});

module.exports = router;