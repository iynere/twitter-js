const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
	var name = req.params.name;
	let tweets = tweetBank.find(function(tweeter) {
		return tweeter.name.toLowerCase().includes(name.toLowerCase());
	});
	res.render('index', {tweets: tweets, showForm: true, userPage: true });
});

router.get('/tweets/:id', function(req, res) {
	var id = req.params.id;
	let tweets = tweetBank.find(function(tweeter) {
		return tweeter.id === parseInt(id);
	});
	// console.log(tweets);
	res.render('index', {tweets: tweets});
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
