var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Family',
  						description: 'This is my family. Here is a brief description of my family members' });
});

router.get('/wanda', function(req, res, next) {
  res.render('wanda', { title: 'Wanda',
  					description: 'Wanda is my mom. She is a very dedicated worker and provider. She loves gardening and watching her flowers bloom in the summer. She also loves to bake, and often leaves our house scented with the lovely fragrant of chocolate chip cookies. '});
});

router.get('/hans', function(req, res, next) {
  res.render('hans', { title: 'Hans',
  					description: 'Hans is my dad. He loves long drives and is very knowledgable with directions. He enjoys watching politics and documentaries. When he has spare time he likes to relax to some video games.'});
});

/* GET random page */
router.get('/dustin', function(req, res, next) {
	//Calculates a random number and passes it to view called "random"
	res.render('dustin', { title: 'Dustin',
							description: 'My brother is pretty awesome! We have a lot in common. We have no other siblings so we spent a lot of time together growing up. We share many of the same interests and hobbies such as Star Wars, Starcraft, and In The Groove 2.'});
});

/* GET random page */
router.get('/riley', function(req, res, next) {
	//Calculates a random number and passes it to view called "random"
	res.render('riley', { title: 'Our Dog, Riley',
							description: 'Riley is our dog. He is 2.5 years old shih tzu and is absolutely adorable! His favorite food is everything, and we all love the way he must greet us with one of his toys when we walk through the front door. Our lives would be lost without Riley.'});
});

module.exports = router;
