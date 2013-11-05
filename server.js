var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib')
	,	app = express();


var green = '\u001b[32m';
var reset = '\u001b[0m';

function compile(str, path)	{
	return stylus(str)
	.set('filename', path)
	.use(nib())
}


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
{ src: __dirname + '/static',	compile: compile}
));

app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
	res.render('index');
});



app.listen(4000);
console.log(green + 'Lite-Strap \nListening on port 4000' + reset);