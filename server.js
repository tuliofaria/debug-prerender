var express = require('express'),
	fs 		= require('fs'),
	app 	= express();

app.get('/*', function (req, res) {
	fs.appendFile('logs.txt', req.url+"\n", function (err) {
	});
  	res.send('Your request arrived into pre-render test. Check logs.txt later.');
});

app.listen(3000, function () {
  console.log('Prerender testing...');
});