const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const app = express(); // creates an instance of an express application

app.listen(3000, function() {
	console.log('the server started');
});

//MIDDLEWARE
app.use(volleyball);
app.use('/', routes);
app.use(express.static('public'));

// app.use('/', function (req, res, next) {
// 	console.log("logged request: ", req.method, req.path, res.statusCode);
// 	next();
// });

// app.use('/special', function (req, res, next) {
// 	console.log("congrats u found the secret place", req.method, req.path);
// 	next();
// });


// app.get('/', function(req, res, next){
//     res.render( 'index', {title: 'All About Me', people: people} );
// })


//ROUTES



//NUNJUCKS HTML RENDERER
const people = [{name: 'Grace'}, {name: 'Hopper'}, {name: 'Daughter'}];
nunjucks.configure("views", { noCache: true })
app.set('view engine', 'html'); // have res.render work with html files. This is middleware
app.engine('html', nunjucks.render)





// var express = require('express')
// var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

// var express = require('express');

// var app = express();

// var articles = ['a', 'd', 'c'];

// app.use('/', function(req, res, next) {
// 	console.log("Request: ", req.method, req.path);
// 	next();
// });

// app.get('/', function(req, res, next) {
// 	res.send('This is technically enough of a response');
// });

// app.get('/articles', function(req, res, next) {
// 	res.json(articles);
// });

// app.get('/unknown', function(req, res, next) {
// 	next({status: 403, msg: 'whatevs'});
// })

// app.use('/', function(err, req, res, next) {
// 	console.error(err.msg);
// 	res.sendStatus(err.status);
// });

// app.listen(3000, function() {
// 	console.log('The server started');
// });
