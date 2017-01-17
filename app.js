const express = require( 'express' );
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const bodyParser = require('body-parser');
const app = express(); // creates an instance of an express application

app.listen(3000, function() {
	console.log('the server started');
});

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(volleyball);
app.use('/', routes);
app.use(express.static('public'));

//NUNJUCKS HTML RENDERER
nunjucks.configure("views", {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files. This is middleware
app.engine('html', nunjucks.render)
